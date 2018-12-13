import { storiesOf } from "@storybook/html";

import VideoContext from "../src/videocontext";
import shia from "../docs/assets/introductions-rant.mp4";

storiesOf("VideoContext", module)
    .add("Code playground", () => {

        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", "640px");
        canvas.setAttribute("height", "360px");

        const videoContext = new VideoContext(canvas);

        canvas.addEventListener("click", () => {
            // console.log(videoContext);
            // if (videoContext.state === VideoContext.STATE.PAUSED) {
            videoContext.play();
            // } else {
            //     videoContext.pause();
            // }
        });

        const videoNode1 = videoContext.video(shia);
        videoNode1.start(0);
        videoNode1.stop(4);

        videoNode1.connect(videoContext.destination);

        return canvas;
    });
