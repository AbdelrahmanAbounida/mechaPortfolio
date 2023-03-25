export const PROJECTS = [
  {
    id: '1',
    title: 'Seagrass Supply (ROS)',
    description:
      'Seagrass Supply Simulation and implementation using ROS-Gazebo with Bluerov2 Robot Model',
    image: {
      src: 'proj_images/seaGrass.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/fav_controller',
    },
    technologies: [
      'ROS',
      'Gazebo',
      'UnderWater Robot',
    ],
  },
  {
    id: '2',
    title: 'Path Planning Simulator',
    description:
      'BFS Algorithm simulation using python-pygame. it was built for a bigger project (Controlling Mobile Robot using ROS)',
    image: {
      src: '/proj_images/BFS.gif',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/path_planning_simulator',
    },
    technologies: [
      "Python",
      "Pygame",
      "Simulated Annealing",
      "BFS"
    ],
  },
  {
    id: '3',
    title: 'Robot Control Dashboard (ROS- React)',
    description:
      "A simple Dashboard which opens a web socket connection with ros using (Ros bridge server) , React , Django to handle authentication and API mplementation",
    image: {
      src: '/proj_images/manualControl.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/controldashboard',
    },
    technologies: [
      "ROS",
      "React",
      "Redux",
      "Django",
      "DRF"
    ],
  },
  {
    id: '4',
    title: 'Robust Fiducial Markers Detection (Gazebo)',
    description:
      'Apriltag detection simulation with ROS & Gazebo Using Quadruped Robot (Bittle model)',
    image: {
      src: '/proj_images/follow.gif',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/bittle_ros',
    },
    technologies: [
      "ROS",
      "Gazebo",
      "Quadrobot"
    ],
  },
  {
    id: '5',
    title: 'Lejos-EV3-Autonomous-Robot',
    description:
      'EV3Lejos robot maneuvering through no-loop maze to find a specific colorful wall with the latter dertermined by the user. (java- EV3Lejos API)',
    image: {
      src: '/proj_images/ev3.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/Lejos-EV3-Autonomous-Robot',
    },
    technologies: [
      "java",
      "EV3 API"
    ],
  },
  {
    id: '6',
    title: 'Pin Classification (tf)',
    description:
      'Tensorflow NN Model to classify containers pins states (open/close)',
    image: {
      src: '/proj_images/pin_classification.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/pin_classifier',
    },
    technologies: [
     "Python",
     "Tensorflow"
    ],
  },
  {
    id: '7',
    title: 'AprilTag Detection (Raspberrypi)',
    description:
      'Apriltag detection using opencv (Raspberrypi)',
    image: {
      src: '/proj_images/apriltagDetection.gif',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/apriltag_detection',
    },
    technologies: [
      "Python",
      "OpenCV",
      "Raspberrypi"
    ],
  },
  {
    id: '8',
    title: 'Pin Detection Model',
    description:
      'Fine Tuning ssd_resnet50 Model to detect custom objects (Container pins)',
    image: {
      src: '/proj_images/pin_detection_process.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/pindetectiontfmodel',
    },
    technologies: [
      "Python",
     "Tensorflow"
    ],
  },

  {
    id: '9',
    title: 'Custom Pin Detector Using Yolov7',
    description:
      'Fine Tuning Yolov7 Model to detect custom objects (Container pins)',
    image: {
      src: '/proj_images/pin.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://github.com/AbdelrahmanAbounida/custom_pin_detection',
    },
    technologies: [
      "Python",
     "Yolov7"
    ],
  },
];


