import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Next-Gen Smart Home Assistant",
      category: "Technology",
      description:
        "An AI-powered home assistant that learns and adapts to your lifestyle",
      image: "/projects-image-1.jpg",
      goal: 50000,
      raised: 35000,
      backers: 420,
      daysLeft: 15,
      status: "Active",
      createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000, // 20 days ago
    },
    {
      id: 2,
      title: "Interactive Art Installation",
      category: "Art & Design",
      description:
        "A dynamic art installation that responds to viewer movements and emotions",
      image: "/projects-image-2.jpg",
      goal: 25000,
      raised: 18000,
      backers: 230,
      daysLeft: 25,
      status: "Active",
      createdAt: Date.now() - 15 * 24 * 60 * 60 * 1000,
    },
    {
      id: 3,
      title: "Eco-Friendly Gaming Console",
      category: "Games",
      description: "A sustainable gaming console made from recycled materials",
      image: "/projects-image-3.jpg",
      goal: 100000,
      raised: 82000,
      backers: 950,
      daysLeft: 5,
      status: "Active",
      createdAt: Date.now() - 25 * 24 * 60 * 60 * 1000,
    },
    {
      id: 4,
      title: "Virtual Reality Music Experience",
      category: "Music",
      description: "Immersive VR platform for music creation and performance",
      image: "/projects-image-4.jpg",
      goal: 40000,
      raised: 12000,
      backers: 180,
      daysLeft: 45,
      status: "Active",
      createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
    },
    {
      id: 5,
      title: "Revolutionary Film Camera",
      category: "Film & Video",
      description: "Digital-analog hybrid camera for modern filmmakers",
      image: "/projects-image-5.jpg",
      goal: 75000,
      raised: 45000,
      backers: 320,
      daysLeft: 30,
      status: "Active",
      createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
    },
    {
      id: 6,
      title: "Smart Fashion Wearable",
      category: "Fashion Tech",
      description: "Clothing that adapts to weather and user preferences",
      image: "/projects-image-6.jpg",
      goal: 60000,
      raised: 30000,
      backers: 280,
      daysLeft: 20,
      status: "Active",
      createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000,
    },
    {
      id: 7,
      title: "AI Learning Platform",
      category: "Education",
      description: "Personalized education powered by artificial intelligence",
      image: "/projects-image-7.jpg",
      goal: 45000,
      raised: 38000,
      backers: 420,
      daysLeft: 8,
      status: "Active",
      createdAt: Date.now() - 18 * 24 * 60 * 60 * 1000,
    },
    {
      id: 8,
      title: "Sustainable Food Tech",
      category: "Food Tech",
      description: "Smart indoor farming solution for urban environments",
      image: "/projects-image-8.jpg",
      goal: 35000,
      raised: 28000,
      backers: 310,
      daysLeft: 12,
      status: "Active",
      createdAt: Date.now() - 22 * 24 * 60 * 60 * 1000,
    },
    {
      id: 9,
      title: "Medical AI Assistant",
      category: "Healthcare",
      description: "AI-powered diagnostic tool for healthcare professionals",
      image: "/projects-image-9.jpg",
      goal: 90000,
      raised: 65000,
      backers: 580,
      daysLeft: 18,
      status: "Active",
      createdAt: Date.now() - 12 * 24 * 60 * 60 * 1000,
      featured: true,
    },
    {
      id: 10,
      title: "Solar Energy Innovation",
      category: "Energy",
      description: "Next-generation solar panels with improved efficiency",
      image: "/projects-image-10.jpg",
      goal: 120000,
      raised: 95000,
      backers: 780,
      daysLeft: 10,
      status: "Active",
      createdAt: Date.now() - 28 * 24 * 60 * 60 * 1000,
    },
    {
      id: 11,
      title: "Robotics Education Kit",
      category: "Robotics",
      description: "DIY robotics kit for STEM education",
      image: "/projects-image-11.jpg",
      goal: 30000,
      raised: 22000,
      backers: 260,
      daysLeft: 35,
      status: "Active",
      createdAt: Date.now() - 16 * 24 * 60 * 60 * 1000,
    },
    // Coming Soon Projects
    {
      id: 12,
      title: "Quantum Computing Kit",
      category: "Technology",
      description: "Educational quantum computing simulator",
      image: "/projects-image-12.jpg",
      goal: 80000,
      raised: 0,
      backers: 0,
      daysLeft: 0,
      status: "Coming Soon",
      createdAt: Date.now(),
      featured: true,
    },
    {
      id: 13,
      title: "AR Art Gallery",
      category: "Art & Design",
      description: "Augmented reality art exhibition platform",
      image: "/projects-image-13.jpg",
      goal: 40000,
      raised: 0,
      backers: 0,
      daysLeft: 0,
      status: "Coming Soon",
      createdAt: Date.now(),
      featured: true,
    },
    // Ended Projects
    {
      id: 14,
      title: "Smart Garden System",
      category: "Technology",
      description: "Automated plant care and monitoring system",
      image: "https://source.unsplash.com/random/800x600/?garden",
      goal: 25000,
      raised: 28000,
      backers: 340,
      daysLeft: 0,
      status: "Ended",
      createdAt: Date.now() - 60 * 24 * 60 * 60 * 1000,
    },
    {
      id: 15,
      title: "Digital Art Platform",
      category: "Art & Design",
      description: "NFT marketplace for digital artists",
      image: "https://source.unsplash.com/random/800x600/?digital",
      goal: 50000,
      raised: 48000,
      backers: 520,
      daysLeft: 0,
      status: "Ended",
      createdAt: Date.now() - 45 * 24 * 60 * 60 * 1000,
    },
  ],
  status: 'idle',
  error: null
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateProjectFunding: (state, action) => {
      const { projectId, amount } = action.payload;
      const project = state.projects.find((p) => p.id === projectId);
      if (project) {
        project.raised += amount;
        project.backers += 1;
      }
    },
  },
});

export const { updateProjectFunding } = projectsSlice.actions;
export default projectsSlice.reducer;
