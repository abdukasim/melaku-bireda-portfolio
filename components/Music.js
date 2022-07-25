import React from "react";

export default function Music() {
  return (
    <div id="music" className="mb-16 lg:mb-32">
      <h1 className="heading-1 text-center mb-10">Music</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-20 lg:mx-40">
        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/ZzSUtMQOXdE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/ORymjs8J1C0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/KD_4NPE-6-g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/Flh8KeCDDOM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
