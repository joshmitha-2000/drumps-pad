import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Jazz from "./Jazz";
import Rock from "./Rock";
import Pop from "./Pop";
import Electronic from "./Electronic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jazz" element={<Jazz />} />
        <Route path="/rock" element={<Rock />} />
        <Route path="/pop" element={<Pop />} />
        <Route path="/electronic" element={<Electronic />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const drumKits = [
    {
      name: "Jazz",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGA4Cj6YX-_oHGb-ZhQJC6fsuu9sN2QGRw-ojWGRklTs1tbkzCd3ank6UtabVS6Ksg3GU&usqp=CAU",
      route: "/jazz",
    },
    {
      name: "Rock",
      image: "https://e1.pxfuel.com/desktop-wallpaper/996/15/desktop-wallpaper-rock-n-roll-%E2%99%AA-%E0%BC%BA%E2%99%A5%E0%BC%BB-%E2%99%A5-be-still-my-heart-%E2%99%A5-help-yourself-i-love-rock-thumbnail.jpg",
      route: "/rock",
    },
    {
      name: "Pop",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkiETH5aueW0NqbvtYDdIQWHSspEntKqZptQ&s",
      route: "/pop",
    },
    {
      name: "Electronic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp63oexrul004sJCTS1VTzSU-Ca1Fnaoyt5g&s",
      route: "/electronic",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-white text-5xl font-extrabold mb-10">
        Choose Your Favorite Style!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {drumKits.map((kit, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate(kit.route)}
          >
            <img
              src={kit.image}
              alt={`${kit.name} Drum`}
              className="w-40 h-40 rounded-full mb-6 border-8 border-gray-600"
            />
            <p className="text-2xl font-semibold">{kit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
