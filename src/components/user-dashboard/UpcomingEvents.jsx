import React from "react";
import { useSelector } from "react-redux";

const UpcomingEvents = () => {
    const theme = useSelector((state) => state.theme.darkMode);

  const events = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      campaign: "Save the Ocean",
      date: "2025-04-15",
      time: "09:00 AM",
      location: "Miami Beach, FL",
      attendees: 45,
      maxAttendees: 100,
      type: "Volunteer",
      description: "Join us for a community beach cleanup event",
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: "Education Fundraiser",
      campaign: "Education for All",
      date: "2025-04-20",
      time: "06:00 PM",
      location: "Central Park, NY",
      attendees: 120,
      maxAttendees: 200,
      type: "Fundraiser",
      description: "Annual fundraising gala for education initiatives",
      image: "https://picsum.photos/400/200?random=2",
    },
    {
      id: 3,
      title: "Medical Camp",
      campaign: "Healthcare Access",
      date: "2025-04-25",
      time: "10:00 AM",
      location: "Community Center, LA",
      attendees: 75,
      maxAttendees: 150,
      type: "Healthcare",
      description: "Free medical checkup camp for the community",
      image: "https://picsum.photos/400/200?random=3",
    },
  ];

  const getEventTypeColor = (type) => {
    if (theme) {
      switch (type) {
        case "Volunteer":
          return "bg-green-100 text-green-600";
        case "Fundraiser":
          return "bg-blue-100 text-blue-600";
        case "Healthcare":
          return "bg-purple-100 text-purple-600";
        default:
          return "bg-gray-100 text-gray-600";
      }
    } else {
      switch (type) {
        case "Volunteer":
          return "bg-green-900/30 text-green-400";
        case "Fundraiser":
          return "bg-blue-900/30 text-blue-400";
        case "Healthcare":
          return "bg-purple-900/30 text-purple-400";
        default:
          return "bg-gray-700 text-gray-400";
      }
    }
  };

  return (
    <div
      className={`rounded-xl transition-all duration-300 animate-fadeIn ${
        theme
          ? "bg-white shadow-lg hover:shadow-xl"
          : "bg-gray-800 shadow-lg hover:shadow-gray-700/50"
      }`}
    >
      <div className="p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-bold ${
              theme ? "text-gray-900" : "text-gray-100"
            }`}
          >
            Upcoming Events
          </h2>
          <select
            className={`text-sm rounded-lg px-3 py-1.5 border transition-colors duration-300 focus:outline-none focus:ring-2 ${
              theme
                ? "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#00bfa5]"
                : "border-gray-700 bg-gray-700 text-gray-200 hover:border-[#00bfa5]"
            }`}
          >
            <option>All Types</option>
            <option>Volunteer</option>
            <option>Fundraiser</option>
            <option>Healthcare</option>
          </select>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`overflow-hidden rounded-lg transition-all duration-300 ${
                theme
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {/* Event Image */}
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {event.title}
                      </h3>
                      <p className="text-white/80 text-sm">{event.campaign}</p>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                        theme
                          ? "bg-white/90 text-gray-800"
                          : "bg-gray-800/90 text-gray-100"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        theme ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      Date & Time
                    </p>
                    <p
                      className={`font-semibold ${
                        theme ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {event.date}
                    </p>
                    <p
                      className={`text-sm ${
                        theme ? "text-[#00bfa5]" : "text-[#00bfa5]"
                      }`}
                    >
                      {event.time}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        theme ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`font-semibold ${
                        theme ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {event.location}
                    </p>
                  </div>
                </div>

                {/* Event Description */}
                <p
                  className={`text-sm mb-4 ${
                    theme ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {event.description}
                </p>

                {/* Attendees Section */}
                <div
                  className={`p-3 rounded-lg ${
                    theme ? "bg-white" : "bg-gray-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className={`text-sm font-medium mb-1 ${
                          theme ? "text-gray-800" : "text-gray-100"
                        }`}
                      >
                        Attendees
                      </p>
                      <p
                        className={`text-xs ${
                          theme ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {event.attendees} of {event.maxAttendees} spots filled
                      </p>
                    </div>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                        theme
                          ? "bg-[#00bfa5] hover:bg-[#009688] text-white"
                          : "bg-[#00bfa5] hover:bg-[#009688] text-gray-900"
                      }`}
                    >
                      Register
                    </button>
                  </div>
                  <div className="mt-2 w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        theme ? "bg-[#00bfa5]" : "bg-[#00bfa5]"
                      }`}
                      style={{
                        width: `${
                          (event.attendees / event.maxAttendees) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button
          className={`w-full mt-6 py-2 px-4 rounded-lg text-sm font-medium text-center transition-all duration-300 ${
            theme
              ? "text-[#00bfa5] hover:text-[#009688] hover:bg-gray-100"
              : "text-[#00bfa5] hover:text-[#009688] hover:bg-gray-700"
          }`}
        >
          View All Events
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
