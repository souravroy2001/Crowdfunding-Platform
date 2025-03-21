import React, { useState } from "react";
import { useParams, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addDonation } from "../redux/features/donationsSlice";
import { updateProjectFunding } from "../redux/features/projectsSlice";
import { toast } from "react-toastify";

const DonationForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.toggleTheme);
  const [donationAmount, setDonationAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [localProject, setLocalProject] = useState(location.state?.project);

  // Get project from navigation state
  const project = location.state?.project;

  // Redirect if no project data
  if (!project) {
    return <Navigate to="/browse-projects" />;
  }

  const progressPercentage = (localProject.raised / localProject.goal) * 100;
  const remainingAmount = localProject.goal - localProject.raised;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = Number(donationAmount);
    
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid donation amount ");
      return;
    }

    if (amount > remainingAmount) {
      toast.warning("Donation amount exceeds the remaining goal ");
      return;
    }

    setIsProcessing(true);
    try {
      // Create donation object
      const donation = {
        id: Date.now(),
        projectId: project.id,
        amount: amount,
        timestamp: new Date().toISOString(),
        status: "completed",
        projectTitle: project.title,
      };

      // Update Redux state first
      dispatch(updateProjectFunding({
        projectId: project.id,
        amount: amount
      }));

      // Add donation record
      dispatch(addDonation(donation));

      // Update local state for immediate UI feedback
      setLocalProject(prev => ({
        ...prev,
        raised: prev.raised + amount
      }));

      // Show success message
      toast.success(`Thank you for donating $${amount.toLocaleString()}! `);
      
      // Navigate back to browse projects after delay
      setTimeout(() => {
        navigate("/browse-projects");
      }, 3000);
    } catch (error) {
      console.error("Donation error:", error);
      toast.error("Failed to process donation. Please try again ");
      // Revert local state on error
      setLocalProject(project);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`min-h-screen mt-[80px] transition-colors duration-300 ${
      theme ? "bg-gray-50" : "bg-gray-900"
    }`}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className={`rounded-2xl overflow-hidden ${
          theme ? "bg-white shadow-xl" : "bg-gray-800 shadow-gray-700/50"
        }`}>
          {/* Hero Section with Image */}
          <div className="relative h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-200">by {project.company}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Project Details */}
            <div className="mb-8 space-y-4">
              <p className={`text-lg ${theme ? "text-gray-600" : "text-gray-300"}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-gray-200"
                }`}>
                  {project.category}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  theme ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-gray-200"
                }`}>
                  {project.daysLeft} days left
                </span>
              </div>
            </div>

            {/* Progress Section */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className={`text-sm font-medium ${
                    theme ? "text-gray-600" : "text-gray-400"
                  }`}>
                    Raised
                  </p>
                  <p className={`text-2xl font-bold ${
                    theme ? "text-gray-900" : "text-white"
                  }`}>
                    ${localProject.raised.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    theme ? "text-gray-600" : "text-gray-400"
                  }`}>
                    Goal
                  </p>
                  <p className={`text-2xl font-bold ${
                    theme ? "text-gray-900" : "text-white"
                  }`}>
                    ${localProject.goal.toLocaleString()}
                  </p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <div
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  className="h-full bg-gradient-to-r from-[#00bfa5] to-[#009688] transition-all duration-300"
                ></div>
              </div>
              <p className={`mt-2 text-center text-sm ${
                theme ? "text-gray-600" : "text-gray-400"
              }`}>
                ${remainingAmount.toLocaleString()} still needed
              </p>
            </div>

            {/* Donation Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="amount"
                  className={`block text-lg font-medium mb-2 ${
                    theme ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  Enter Donation Amount
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className={`text-lg ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}>$</span>
                  </div>
                  <input
                    type="number"
                    id="amount"
                    min="1"
                    step="1"
                    required
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className={`block w-full pl-8 pr-12 py-4 text-lg rounded-lg border ${
                      theme
                        ? "bg-white border-gray-300 text-gray-900 focus:ring-[#00bfa5] focus:border-[#00bfa5]"
                        : "bg-gray-700 border-gray-600 text-white focus:ring-[#00bfa5] focus:border-[#00bfa5]"
                    } focus:outline-none focus:ring-2`}
                    placeholder="Enter amount"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className={`text-sm ${
                      theme ? "text-gray-500" : "text-gray-400"
                    }`}>USD</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 px-6 text-lg font-medium rounded-lg transition-all duration-300 ${
                  isProcessing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#00bfa5] hover:bg-[#009688]"
                } text-white`}
              >
                {isProcessing ? "Processing..." : "Complete Donation"}
              </button>
            </form>

            {/* Security Info */}
            <div className="mt-8 border-t pt-6 space-y-4">
              <div className={`flex items-center justify-center gap-2 ${
                theme ? "text-gray-600" : "text-gray-400"
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Secure payment processing</span>
              </div>
              <p className={`text-center text-sm ${
                theme ? "text-gray-500" : "text-gray-400"
              }`}>
                You'll receive a confirmation email once your donation is processed
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonationForm;
