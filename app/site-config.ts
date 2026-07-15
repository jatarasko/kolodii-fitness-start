export const siteConfig = {
  routes: {
    menuBook: "https://t.me/Kolo_Dii_bot?start=book_tracker",
    tracker: "https://t.me/Kolo_Dii_bot?start=book_tracker",
    starterBundle: "https://t.me/Kolo_Dii_bot?start=book_tracker",
    healthyPlate: "https://t.me/Kolo_Dii_bot?start=course_healthy_plate",
    movementCourse: "https://t.me/Kolo_Dii_bot?start=course_active",
    supportPage: "https://kolodii-fitness-coaching.jatarasko.chatgpt.site",
    supportBot: "https://t.me/kolodiifitness_bot?start=notion_top",
    instagram: "https://www.instagram.com/kolodii_fitness/",
  },
  prices: {
    support: "$300 / 3 місяці",
  },
  analytics: {
    enabled: false,
    events: {
      selfStart: "self_start_click",
      courses: "courses_click",
      support: "support_click",
      menuBook: "menu_book_click",
      tracker: "tracker_click",
      bundle: "starter_bundle_click",
      healthyPlate: "healthy_plate_click",
      movement: "movement_course_click",
      supportPage: "support_page_click",
      supportApplication: "support_application_click",
    },
  },
} as const;
