# React-basics

## Rendering variables and dynamic data

```jsx
const App = () => {
  let x = "Charles";
  let array = ["user1", "user2", "user3", "user4", "user5"];

  return (
    <div>
      {x}
      {array.map((user) => {
        return <h2>{user}</h2>;
      })}
    </div>
  );
};

export default App;
```

## Conditional Rendering

```jsx
const App = () => {
  let data = "boy";

  return <div>{data === "girl" ? <span>🥶</span> : <span>👧</span>}</div>;
};

export default App;
```

## Event Handling and useState

```jsx
import { useState } from "react";

const App = () => {
  const [x, setx] = useState(0);

  const btnClick = () => {
    console.log("Clicked");
    setx(x + 1);
  };

  return (
    <div>
      {x}
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
```

## Passing props

```jsx
const FirstComponent = ({ data, fn }) => {
  return (
    <div>
      <button
        onClick={() => {
          fn(10);
        }}
      >
        Set 10
      </button>
      {data}
    </div>
  );
};

export default FirstComponent;
```

## Using UseRef for Dom Traversing

```jsx
import { useRef, useState } from "react";

const FirstComponent = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
          setData([...data, inputRef.current.value]);
        }}
      >
        Submit
      </button>
      {data.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
};

export default FirstComponent;
```

## Tailwind css

```jsx
<div className="grid lg:grid-cols-2 2xl:grid-cols-5">
  <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 2xl:col-span-2">
    <div className="xl:mr-0">
      {/* logo */}
      <span className="text-gray-900 flex items-center sm:mt-8  gap-2">
        <img className="h-10" src="src\assets\react.svg" alt="icon" />
        <span className="text-2xl font-bold">React Dev</span>
      </span>
      {/* Banner */}
      <img
        className="mt-6 lg:hidden rounded-lg object-cover shadow-xl h-64 w-full sm:object-center"
        src="src\assets\images\art-199.jpg"
        alt="img"
      />
      {/* Header */}
      <h1 className="mt-6 text-2xl sm:mt-8 sm:text-4xl font-bold text-gray-900 lg:text-3xl xl:text-4xl ">
        You can work from anywhere. <br className="hidden lg:inline" />
        <span className="text-indigo-500">take advantage of it.</span>
      </h1>
      {/* Paragraph */}
      <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto
        itaque tempora delectus sint ad! Molestias vel minima voluptatibus
        officia.
      </p>
      {/* Button */}
      <div className="mt-4">
        <a
          className="bg-indigo-500 hover:bg-indigo-300 transform transition hover:translate-y-0.5  text-white px-5 py-3 rounded-lg uppercase shadow-lg font-semibold text-sm tracking-wider sm:mt-6 sm:text-base"
          href="#"
        >
          Book your escape
        </a>
      </div>
    </div>
  </div>
  {/* for responsive banner */}
  <div className="hidden lg:block relative 2xl:col-span-3">
    <img
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="src\assets\images\art-199.jpg"
      alt="img"
    />
  </div>
</div>
```

### Base card

### Base card-1

```jsx
<div className="bg-gray-900 text-gray-50 px-8 py-12 max-w-md mx-auto">
  {/* Logo */}
  <span className="text-grey-50 font-[Google_Sans] text-3xl ">
    Foot<span className="text-yellow-600 ">print</span>{" "}
    <span className="font-bold text-yellow-600">Arts</span>
  </span>
  {/* Banner-Img */}
  <img
    src="src\assets\images\art-137.jpg"
    alt="banner-image"
    className="mt-6 rounded-xl shadow-xl shadow-yellow-600"
  />

  {/* Heading */}
  <h1 className="mt-6 text-2xl font-bold">
    Art is what we <span className="text-yellow-500">Explore</span> and create
    <span className="text-yellow-500"> come and join us!</span>
  </h1>

  {/* Paragraph */}
  <p className="mt-2 text-gray-100">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rem
    nemo harum rerum excepturi assumenda itaque blanditiis repellat fugit unde?
  </p>

  {/* Button */}

  <div className="mt-4">
    <a
      href="#"
      className="bg-yellow-600 px-5 py-3 rounded-lg uppercase font-bold tracking-wider text-sm"
    >
      join now
    </a>
  </div>
</div>
```

## Default App.jsx

```jsx
// import BlurBg from "./Components/BlurBg";
// import Card from "./Components/Card";/
import "./index.css";
// import Main from "./Components/Gemini clone/Main/Main";
// import Sidebar from "./Components/Gemini clone/Sidebar/Sidebar";
import Testing from "./Components/UseContext/Testing";

function App() {
  return (
    <div className="flex bg-red-500 min-h-full w-full">
      {/* card */}
      {/* <Card /> */}
      {/* blurbg */}
      {/* <BlurBg /> */}

      {/* Gemini clone */}
      {/* <Sidebar /> */}
      {/* <Main /> */}

      {/* useContext */}
      <Testing />
    </div>
  );
}

export default App;
```

## DarkMode

```jsx
import "./App.css";
import { useState } from "react";
import TailwindCards from "./Components/Train/TailwindCards";

// import Card from "./Components/Card";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={
        darkMode
          ? { background: "#1b1b1b", color: "white", transition: ".5s" }
          : { background: "white", color: "#1b1b1b", transition: ".5s" }
      }
    >
      {/* Dark-Mode-toggle */}
      <div
        className="flex gap-2  items-center    justify-center  bg-slate-50 p-2"
        onClick={toggleDarkMode}
      >
        <p className="font-bold text-slate-800">
          {darkMode ? "Light" : "Dark"}
        </p>
        {darkMode ? (
          <img
            src="src\Components\Train\images\sunny.svg"
            alt="sun"
            width={24}
          />
        ) : (
          <img
            src="src\Components\Train\images\night_mode.svg"
            alt="sun"
            width={20}
          />
        )}
      </div>
      {/* <Card /> */}
      <TailwindCards />
    </div>
  );
}

export default App;
```

## UI-Card

```jsx
const Card2 = () => {
  return (
    <div className="w-[425px] h-[95vh] bg-white  m-auto rounded-[50px] overflow-hidden relative shadow-lg "></div>
  );
};

export default Card2;
```

## Title

```jsx
{
  /* Section-1 */
}
<section className="w-full h-[100vh] bg-[#fce4e4]  p-[40px]">
  <Card />
</section>;

{
  /* Section-2 */
}
<section className="w-full  h-[100vh] bg-[pink] mt-[50px] p-[40px]">
  <Card2 />
</section>;

{
  /* Section-3 */
}
<section className="w-full h-[100vh] bg-[burlywood] mt-[50px]  p-[40px]">
  <Card3 />
</section>;
```

```js
const getAvilableSlots = async () => {
  setDocInfo([]);

  // getting current date
  let today = new Date();

  for (let i = 0; i < 7; i++) {
    // Getting date with index
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    // Setting end time of the date with index
    let endTime = new Date();
    endTime.setDate(today.getDate() + i);
    endTime.setHours(21, 0, 0, 0);

    // setting hours
    if (today.getDate() === currentDate.getDate()) {
      currentDate.setHours(
        currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
      );
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10);
      currentDate.setMinutes(0);
    }

    let timeSlots = [];

    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minutes: "2-digit",
      });

      // add slot to array
      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });
      // Increment current time by 30 minutes
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    setDocSlots((prev) => [...prev, timeSlots]);
  }
};
```
