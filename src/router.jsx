import { createBrowserRouter } from "react-router-dom";
import FlashCardLayout from "./Screen/Flashcard/FlashCardLayout";
import FlashCardScreen from "./Screen/Flashcard/FlashCardScreen";
import MathematicsScreenLayout from "./Screen/Flashcard/mathematics/MathematicsScreenLayout";
import MathematicsScreen from "./Screen/Flashcard/mathematics/MathematicsScreen";
import HomeScreenLayout from "./Screen/home/HomeScreenLayout";
import HomeScreen from "./Screen/home/HomeScreen";
import SubjectScreen from "./Screen/SubjectScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreenLayout />,
    children: [
      {
        index: true,
        path:"",
        element: <HomeScreen />,
      },
      {
        path: "flashcard",
        element: <FlashCardLayout />,
        children: [
          {
            index: true,
            element: <FlashCardScreen />,
          },

          {
            path: "mathematics",
            element: <MathematicsScreenLayout />,
            children: [
              {
                element: <MathematicsScreen />,
                index: true,
              },
              {
                
                path: ":sub",
                element: <SubjectScreen />,
              },
            ],
          },
        ],
      },
    ],
  },
],{
  basename:'/'
});

export default router;
