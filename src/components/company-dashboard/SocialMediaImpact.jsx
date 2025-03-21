import React from "react";
import { useSelector } from "react-redux";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialData = [
    {
        platform: "Twitter",
        icon: <FaTwitter className="h-5 w-5" />,
        color: "text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        stats: {
            followers: "12.8K",
            engagement: "24%",
            shares: "3.2K",
            trend: "+15%"
        }
    },
    {
        platform: "Facebook",
        icon: <FaFacebook className="h-5 w-5" />,
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        stats: {
            followers: "28.5K",
            engagement: "18%",
            shares: "4.7K",
            trend: "+8%"
        }
    },
    {
        platform: "LinkedIn",
        icon: <FaLinkedin className="h-5 w-5" />,
        color: "text-blue-700",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        stats: {
            followers: "8.2K",
            engagement: "32%",
            shares: "2.1K",
            trend: "+25%"
        }
    },
    {
        platform: "Instagram",
        icon: <FaInstagram className="h-5 w-5" />,
        color: "text-pink-500",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
        stats: {
            followers: "45.3K",
            engagement: "28%",
            shares: "6.8K",
            trend: "+12%"
        }
    }
];

const SocialMediaImpact = () => {
    const theme = useSelector((state) => state.toggleTheme);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                    Social Media Impact
                </h3>
                <button
                    className={`text-sm font-medium ${
                        theme ? "text-blue-600 hover:text-blue-700" : "text-blue-400 hover:text-blue-300"
                    } transition-colors duration-200`}
                >
                    View Analytics
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socialData.map((platform) => (
                    <div
                        key={platform.platform}
                        className={`${
                            theme ? "bg-white hover:bg-gray-50" : "bg-gray-800 hover:bg-gray-700"
                        } rounded-xl p-4 shadow-sm transition-all duration-200 border ${
                            theme ? "border-gray-100" : "border-gray-700"
                        }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${platform.bgColor}`}>
                                    <span className={platform.color}>{platform.icon}</span>
                                </div>
                                <div>
                                    <h4 className={`font-medium ${theme ? "text-gray-900" : "text-white"}`}>
                                        {platform.platform}
                                    </h4>
                                    <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-400"}`}>
                                        {platform.stats.followers} followers
                                    </p>
                                </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                theme ? "bg-green-50 text-green-600" : "bg-green-900/20 text-green-400"
                            }`}>
                                {platform.stats.trend}
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div>
                                <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-400"}`}>
                                    Engagement Rate
                                </p>
                                <p className={`text-lg font-semibold mt-1 ${theme ? "text-gray-900" : "text-white"}`}>
                                    {platform.stats.engagement}
                                </p>
                            </div>
                            <div>
                                <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-400"}`}>
                                    Total Shares
                                </p>
                                <p className={`text-lg font-semibold mt-1 ${theme ? "text-gray-900" : "text-white"}`}>
                                    {platform.stats.shares}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaImpact;
