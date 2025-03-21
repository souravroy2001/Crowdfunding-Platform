import { FaRocket, FaShieldAlt, FaUsers, FaChartLine, FaLaptop, FaPalette, FaLeaf, FaGamepad, } from "react-icons/fa";

export const themeConfig = {
    colors: {
        primary: "#1e2939",
        secondary: "#00c951",
        dark: {
            background: "#1e2939",
            card: "#2a3749",
            text: "#ffffff",
            textSecondary: "#94a3b8"
        },
        light: {
            background: "#ffffff",
            card: "#f8fafc",
            text: "#1e2939",
            textSecondary: "#64748b"
        }
    }
};

export const heroData = {
    title: "Fund Your Dreams,\nChange The World",
    description: "Join thousands of creators and innovators who have successfully funded their projects. Start your journey today and bring your ideas to life.",
    buttons: [
        {
            text: "Start a Campaign",
            link: "/create-campaign",
            primary: true
        },
        {
            text: "Explore Projects",
            link: "/browse-projects",
            primary: false
        }
    ]
};

export const featuresData = {
    title: "Why Choose FundHive?",
    subtitle: "We provide the tools and support you need to bring your creative projects to life.",
    items: [
        {
            icon: FaRocket,
            title: "Quick Launch",
            description: "Set up your campaign in minutes with our intuitive platform"
        },
        {
            icon: FaShieldAlt,
            title: "Secure & Transparent",
            description: "Built on blockchain technology for maximum security and transparency"
        },
        {
            icon: FaUsers,
            title: "Global Community",
            description: "Connect with supporters from around the world"
        },
        {
            icon: FaChartLine,
            title: "Real-time Analytics",
            description: "Track your campaign's performance with detailed analytics"
        }
    ]
};

export const statsData = [
    { value: "$128M+", label: "Total Funds Raised" },
    { value: "15,000+", label: "Successful Projects" },
    { value: "2.5M+", label: "Global Backers" },
    { value: "94%", label: "Success Rate" }
];

export const featuredProjects = [
    {
        id: 1,
        image: "/company-product-1.jpg",
        title: "Eco-Friendly Water Bottle",
        description: "Revolutionary design that helps reduce plastic waste",
        funded: 75,
        amount: 45000
    },
    {
        id: 2,
        image: "/company-product-2.jpg",
        title: "Smart Home Hub",
        description: "Next generation home automation system",
        funded: 85,
        amount: 92000
    },
    {
        id: 3,
        image: "/company-product-3.jpg",
        title: "E-Bike Revolution",
        description: "Sustainable urban transportation solution",
        funded: 65,
        amount: 128000
    }
];

export const howItWorksData = {
    title: "How It Works",
    subtitle: "Start your campaign in three simple steps",
    steps: [
        {
            image: "/Success Stories-1.jpg",
            title: "Create Your Campaign",
            description: "Share your story, set your funding goal, and create compelling rewards"
        },
        {
            image: "/Success Stories-2.jpg",
            title: "Share & Promote",
            description: "Spread the word through social media and your network"
        },
        {
            image: "/Success Stories-3.jpg",
            title: "Track Progress",
            description: "Monitor your campaign's success and engage with backers"
        }
    ]
};

export const categories = [
    { icon: FaLaptop, title: "Technology", count: "250+" },
    { icon: FaPalette, title: "Art & Design", count: "180+" },
    { icon: FaLeaf, title: "Sustainability", count: "150+" },
    { icon: FaGamepad, title: "Games", count: "200+" }
];

export const successStories = {
    title: "Success Stories",
    subtitle: "Hear from our successful campaign creators",
    stories: [
        {
            image: "/Success Stories-1.jpg",
            name: "Sarah Johnson",
            category: "Eco-Friendly Products",
            testimonial: "The platform made it incredibly easy to share our vision and connect with like-minded supporters. We exceeded our funding goal by 200%!",
            rating: 5
        },
        {
            image: "/Success Stories-2.jpg",
            name: "Michael Chen",
            category: "Tech Innovation",
            testimonial: "From concept to launch, the support we received was incredible. Our community of backers helped us refine and improve our product.",
            rating: 5
        },
        {
            image: "/Success Stories-3.jpg",
            name: "Emma Rodriguez",
            category: "Social Impact",
            testimonial: "Thanks to this platform, we were able to bring our community project to life. The impact has been beyond our expectations.",
            rating: 5
        }
    ]
};

export const pricingPlansData = {
    title: "Choose Your Plan",
    subtitle: "Select the perfect plan for your fundraising needs",
    plans: [
        {
            title: "Basic",
            price: "Free",
            features: [
                "Basic campaign tools",
                "Community support",
                "Standard analytics",
                "Email notifications",
                "Basic donor management"
            ],
            buttonText: "Get Started",
            featured: false
        },
        {
            title: "Pro",
            price: 29,
            period: "month",
            featured: true,
            features: [
                "Advanced campaign tools",
                "Priority support",
                "Advanced analytics",
                "Custom branding",
                "Team collaboration",
                "API access"
            ],
            buttonText: "Get Started",
            featured: true
        },
        {
            title: "Enterprise",
            price: 99,
            period: "month",
            features: [
                "All Pro features",
                "Dedicated support",
                "Custom integrations",
                "White-label solution",
                "Advanced security",
                "Custom reporting"
            ],
            buttonText: "Contact Sales",
            featured: false
        }
    ]
};

export const platformStatsData = {
    title: "Platform Statistics",
    subtitle: "Our growth and impact in numbers",
    stats: [
        { number: "180+", label: "Countries Reached" },
        { number: "$500M+", label: "Total Transactions" },
        { number: "5M+", label: "Registered Users" },
        { number: "98%", label: "User Satisfaction" }
    ]
};

export const videoTestimonialsData = {
    title: "Video Testimonials",
    subtitle: "Watch real stories from our successful creators",
    testimonials: [
        {
            title: "Tech Startup Success",
            description: "How we raised $500K in 30 days",
            videoUrl: "https://www.youtube.com/embed/9No-FiEInLA"
        },
        {
            title: "Art Project Journey",
            description: "From concept to global recognition",
            videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ"
        },
        {
            title: "Community Impact",
            description: "Making a difference together",
            videoUrl: "https://www.youtube.com/embed/5Peo-ivmupE"
        }
    ]
};

export const newsUpdatesData = {
    title: "Latest News & Updates",
    subtitle: "Stay informed about our platform and community",
    news: [
        {
            image: "/Latest News & Updates-1.jpg",
            title: "New Platform Features Released",
            description: "Explore our latest tools and improvements for campaign creators.",
            link: "#"
        },
        {
            image: "/Latest News & Updates-2.jpg",
            title: "Success Story: $1M Milestone",
            description: "Learn how our top creator reached this amazing achievement.",
            link: "#"
        },
        {
            image: "/Latest News & Updates-3.jpg",
            title: "Upcoming Creator Workshop",
            description: "Join our free online session to maximize your campaign success.",
            link: "#"
        }
    ]
};

export const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our platform",
    questions: [
        {
            question: "How does crowdfunding work?",
            answer: "Crowdfunding allows creators to raise funds for their projects through small contributions from many people. You set a goal, share your story, and offer rewards to backers."
        },
        {
            question: "What fees do you charge?",
            answer: "We charge a 5% platform fee on successfully funded projects, plus payment processing fees. Failed projects incur no fees."
        },
        {
            question: "How long can my campaign run?",
            answer: "Campaigns can run from 1 to 60 days. We recommend 30 days as the optimal campaign duration."
        },
        {
            question: "What happens if I don't reach my goal?",
            answer: "We use an all-or-nothing funding model. If you don't reach your goal, all backers are refunded and no fees are charged."
        }
    ]
};

export const appFeatures = [
    "Real-time campaign analytics",
    "Instant notifications",
    "Secure payment processing",
    "Direct messaging with backers"
];

export const campaignCategories = {
    title: "Campaign Categories",
    subtitle: "Discover projects across various industries",
    categories: [
        {
            icon: FaLaptop,
            title: "Technology",
            projectCount: "250+",
            color: "primary"
        },
        {
            icon: FaPalette,
            title: "Art & Design",
            projectCount: "180+",
            color: "secondary"
        },
        {
            icon: FaLeaf,
            title: "Sustainability",
            projectCount: "150+",
            color: "success"
        },
        {
            icon: FaGamepad,
            title: "Games",
            projectCount: "200+",
            color: "info"
        }
    ]
};
