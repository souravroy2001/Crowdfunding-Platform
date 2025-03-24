# **FundHive: Crowdfunding Platform**

Welcome to **FundHive**, the platform that connects individuals and organizations to raise funds for impactful projects. This repository contains all the assets and code necessary to build and customize **FundHive's** UI, helping you create campaigns, track donations, and engage with supporters.

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [UI Design](#ui-design)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Directory Structure](#directory-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## **Project Overview**

**FundHive** is a dynamic crowdfunding platform that empowers creators to raise funds for their causes, projects, and startups. The platform focuses on building an engaging user experience with a seamless, interactive interface for both campaign creators and donors.

---

## **UI Design**

The UI for **FundHive** is structured to be both **user-friendly** and **interactive**. We aim to offer a smooth experience for creating campaigns, managing donations, and engaging with supporters. The design is divided into the following key pages:

### 1. **Home Page**

- **Hero Section:** A welcome message with a call-to-action for users to start or explore campaigns.
- **Featured Campaigns:** Showcase trending campaigns and success stories.
- **Donation Statistics:** Key metrics of FundHive’s impact.

### 2. **Login & Registration**

- **User Login:** For backers and creators to log into their accounts.
- **User Registration:** To create a new user profile and join FundHive.
- **Admin & Company Login:** Separate login for the platform's administration and company users to manage the platform verifications code (123456).

### 3. **Campaign Management**

- **Campaign Creation Wizard:** Step-by-step interface for users to set up their campaigns, including descriptions, goals, images, videos, and milestone tracking.
- **Donation Tracking Dashboard:** Visual displays of total funds raised, donation statistics, and progress bars.
- **Supporter Interaction:** Real-time comment section and live updates for donor engagement.

### 4. **Coming Soon Page**

- **Under Development:** Placeholder page for upcoming features.
- **Countdown Timer:** Displaying the time remaining for feature launches.
- **Notify Me:** Option to subscribe for updates.

### 5. **Additional Pages**

- **How It Works:** Step-by-step visual flow explaining how the platform works.
- **Success Stories:** Showcase real campaigns that have achieved their fundraising goals.
- **About Us:** Our mission, team, and company story.
- **Careers:** Current job openings at FundHive.
- **Press:** Media coverage and press releases.
- **Impact:** Showcase FundHive’s global impact with statistics and case studies.
- **Help Center:** FAQs and support.
- **Creator Resources:** Guides, tips, and downloadable templates for campaign creators.
- **Guidelines:** Community guidelines and best practices for launching campaigns.
- **Contact Us:** Contact form for user inquiries.

---

## **Features**

### **1. Interactive Campaign Creation Wizard**

- **Drag-and-Drop Media Uploads:** Users can upload images and videos with smooth drag-and-drop functionality.
- **Live Campaign Preview:** Allows users to see a live preview of their campaign as they fill out the form.
- **Milestone Tracking:** Visual progress indicators to track campaign funding milestones.

### **2. Donation Tracking Dashboard**

- **Real-Time Progress Bars:** Animated bars to visualize funds raised and campaign progress.
- **Donation Statistics:** Displays total funds raised, number of donors, and donation activity.
- **Supporter Badges:** Recognition for top donors and their contributions.

### **3. Supporter Interaction Features**

- **Live Comment Feed:** Supporters can leave comments, ask questions, and engage with campaign creators in real-time.
- **Interactive Updates:** Campaign creators can post updates and notify backers of milestones.
- **Personalized Notifications:** Automated updates for donors regarding new milestones, rewards, and campaigns.

### **4. Rewards & Incentive Mechanism**

- **Reward Tiers Visualization:** Display of reward tiers to encourage higher donations.
- **Dynamic Countdown:** A countdown timer for time-sensitive rewards or special offers.

### **5. Coming Soon Page**

- A placeholder for features that are under development.
- **Countdown Timer** with an option for users to sign up for notifications.

---

## **Installation**

To run **FundHive** locally or contribute to development, follow these steps:

### Prerequisites:

- React.js (vite@latest)
- npm or yarn

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/souravroy2001/Crowdfunding-Platform
   cd fundhive
   ```

### Install Dependencies:

```bash
npm install
```

### Run the Development Server:

```bash
npm run dev
```

### Open the Application:

    Open your web browser and navigate to http://localhost:5173.

---

## **Usage**

### **Campaign Creation**

1. **Log in** or **sign up** to your account.
2. **Start a Campaign** using the campaign creation wizard.
3. Add your campaign details: images, videos, and milestones.
4. Publish the campaign once ready.

### **Dashboard**

- Track donations in real-time using the **Donation Dashboard**.
- View live comments and updates for ongoing campaigns.

### **Supporter Interaction**

- Donate to campaigns you care about.
- Leave comments, ask questions, and follow the campaigns for updates.

---

## **Directory Structure**

/FundHive
│
├── /node_modules # Node.js dependencies
├── /public # Public assets (images, icons, etc.)
│
├── /src
│ ├── /components # Reusable components organized by feature
│ │ │
│ │ ├── /admin-campaigns # Admin campaign management
│ │ │ ├── AdminCampaigns.jsx
│ │ │ ├── CampaignDetail.jsx
│ │ │ ├── Campaigns.jsx
│ │ │ ├── CompaniesOverview.jsx
│ │ │ ├── CreateCampaign.jsx
│ │ │ └── EditCampaign.jsx
│ │ │
│ │ ├── /admin-dashboard # Admin analytics dashboard
│ │ │ ├── AdminAnalytics.jsx
│ │ │ ├── AdminCompanies.jsx
│ │ │ ├── AdminDonations.jsx
│ │ │ ├── AdminLayout.jsx
│ │ │ ├── AdminReports.jsx
│ │ │ ├── AdminSettings.jsx
│ │ │ ├── AdminUsers.jsx
│ │ │ ├── CampaignChart.jsx
│ │ │ ├── CompanyDetail.jsx
│ │ │ ├── DemographicsChart.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── LatestDonations.jsx
│ │ │ ├── PendingApprovals.jsx
│ │ │ ├── RecentActivities.jsx
│ │ │ ├── RevenueChart.jsx
│ │ │ ├── Sidebar.jsx
│ │ │ └── StatCards.jsx
│ │ │
│ │ ├── /browse-projects # Project discovery components
│ │ │ └── ProjectCard.jsx
│ │ │
│ │ ├── /company-dashboard # Company dashboard components
│ │ │ ├── /metrics
│ │ │ │ ├── AverageDonation.jsx
│ │ │ │ ├── DaysLeft.jsx
│ │ │ │ ├── Supporters.jsx
│ │ │ │ └── TotalRaised.jsx
│ │ │ │
│ │ │ ├── CampaignMilestones.jsx
│ │ │ ├── CampaignPerformance.jsx
│ │ │ ├── CampaignUpdates.jsx
│ │ │ ├── CompanyHeader.jsx
│ │ │ ├── CompanyNavbar.jsx
│ │ │ ├── EngagementMetrics.jsx
│ │ │ ├── MetricsGrid.jsx
│ │ │ ├── RecentActivity.jsx
│ │ │ ├── SocialMediaImpact.jsx
│ │ │ └── TopSupporters.jsx
│ │ │
│ │ ├── /create-campaign # Campaign creation wizard
│ │ │ ├── BasicDetailsStep.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── FundingGoalsStep.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── MediaUploadStep.jsx
│ │ │ ├── PreviewStep.jsx
│ │ │ ├── RewardsStep.jsx
│ │ │ ├── Sidebar.jsx
│ │ │ ├── StepIndicator.jsx
│ │ │ └── StoryStep.jsx
│ │ │
│ │ └── /user-dashboard # User dashboard components
│ │ ├── Achievements.jsx
│ │ ├── ActiveCampaigns.jsx
│ │ ├── DonationSummary.jsx
│ │ ├── ImpactStories.jsx
│ │ ├── Notifications.jsx
│ │ ├── RecentActivity.jsx
│ │ ├── UpcomingEvents.jsx
│ │ └── UserProfile.jsx
│ │
│ ├── AdminDashboard.jsx # Main admin dashboard page
│ ├── AdminReports.jsx # Reporting interface
│ ├── AdminSettings.jsx # System configuration
│ ├── AdminUsers.jsx # User management
│ ├── BrowseProjects.jsx # Project discovery page
│ ├── CampaignDetails.jsx # Campaign detail view
│ ├── Careers.jsx # Careers page
│ ├── ComingSoon.jsx # Placeholder for upcoming features
│ ├── CommunityGuidelines.jsx # Community rules
│ ├── CompanyDashboard.jsx # Main company dashboard
│ ├── ContactUs.jsx # Contact form
│ ├── CreateCampaign.jsx # Campaign creation entry point
│ ├── CreatorResources.jsx # Creator educational resources
│ ├── DonationForm.jsx # Donation processing form
│ ├── Footer.jsx # Global footer
│ ├── HelpCenter.jsx # Support center
│ ├── Home.jsx # Landing page
│ ├── HowItWorks.jsx # Platform explanation
│ ├── Impact.jsx # Success metrics
│ ├── Login.jsx # Authentication
│ ├── MediaPressHub.jsx # Press resources
│ ├── Navbar.jsx # Global navigation
│ ├── NotificationsPage.jsx # Notification center
│ ├── Registration.jsx # User registration
│ ├── SuccessStories.jsx # Case studies
│ └── UserDashboard.jsx # Main user dashboard
│
│ ├── /data # Reusable components organized by feature
│ │ │
│ │ ├── homeData.js # Home page data
│ │
│ ├── /firebase # Firebase configuration
│ │ ├── firebase.js # Firebase initialization
│ │ ├── auth.jsx # Firebase rules
│
│
│ ├── /redux # Redux store configuration
│ │ │
│ │ ├── /features # Redux slices
│ │ │ ├── campaignSlice.js # Campaign state management
│ │ │ ├── donationSlice.js # Donation state management
│ │ │ └── adminSlice.js # Admin state management
│ │ │ └── authSlice.js # Auth state management
│ │ │ └── companySlice.js # Company state management
│ │ │ └── notificationSlice.js # Notification state management
│ │ │ └── themeSlice.js # Theme state management
│ │ │ └── projectSlice.js # Project state management
│ │ │ └── favoriteSlice.js # Favorite state management
│ │
│ │ ├── store.js # Redux store configuration
│ │
│ ├── /router # React Router configuration
│ │ │ |--PrivateRoute.jsx # Private route component
│ │ │
│ │ │
│ │ │
│ │ ├── App.jsx # Main application component
│ │ ├── index.js # Entry point
│ │ └── index.css # Global styles
│ │ └── main.jsx # Main application component
│
├── package.json # Project dependencies
└── README.md # Project documentation

---

## **Contributing**

We welcome contributions to **FundHive**! Whether it's fixing bugs, adding features, or improving documentation, feel free to fork the repository and submit a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the feature branch.
5. Open a pull request for review.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or inquiries, feel free to reach out to us:

- Email: souravroy2145@gmail.com
- Social Media:
  - Twitter: [@FundHive](https://x.com/Sourav_life)
  - LinkedIn: [FundHive](https://www.linkedin.com/in/iam-sourav/)

---

This **README** file is designed to provide a comprehensive overview of the **FundHive** platform, explaining its key features, installation, usage, and contribution guidelines. If you need further information or assistance, feel free to reach out! 🌟
