// Developed by Johnathan Bissontz for the Career Days at Mars Area Elementary School on Feb 3rd and 4th 2025.

import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <main id="content-main">
            <h1>About Me</h1>
            <p>My name is John Bissontz and I&apos;ve worked as a software developer for about 4 years, but I&apos;ve always LOVED computers.
                I even built my own PC when I was 12 years old!
                I have two boys that go to Mars Elementary just like all of you.</p>
            <h1>What is a Software Developer?</h1>
            <p>A software developer is someone who creates computer programs. 
                They are like a builder, but instead of building houses, roads, bridges, or offices, they build things on a computer. 
                We use special instructions that a computer can understand called code to make websites, apps, and even games work. 
                Computers don&apos;t understand normal language like we do, they use a language called binary to talk. 
                Binary is a bunch of ones and zeros in a certain order that mean different things.</p>
            <Image id="binary-image" src="/binary.jpg" alt="Binary Code" width={300} height={168}/>
            <h1>What do I like about my job?</h1>
            <p>There are many things that I like about my job. Some of them are:</p>
            <ul id="likes-list">
                <li>I get to work remotely, which means I usually get to stay home and hang out with my cats while I work. But I can actually work from anywhere there is an internet connection.
                    <Image id="my-cats" src="/cats.jpg" alt="Cats" width={360} height={240} />
                </li>
                <li>I get to build things that can help people in many different ways. I&apos;ve worked on projects for the US government, medical robots that help give medicine, and even games!
                    <Image id="robot" src="/robot.png" alt="Robot" width={225} height={225} />
                </li>
                <li>I&apos;m always learning new things! There are lots of different technologies out there that need different types of software, so it never gets boring.</li>
                <li>I love puzzles, and coding is just like solving a big puzzle. I get to figure out how different pieces can be used to solve a bigger problem.
                    <Image id="puzzle-pieces" src="/puzzle.png" alt="Puzzle" width={260} height={196} />
                </li>
            </ul>
            <h1>Where can you go learn to code?</h1>
            <p>There are many places where you can learn to code. 
                I&apos;ve been told there is a few that you already use at school during your STEM/STEAM classes like ScratchJr, Code.org, and Code Builder in Minecraft Education Edition.
                There is even more places to learn to code, like these:</p>
            <ul id="learn-list">
            <li><a href="https://blockly.games/" target="_blank"><u>Blockly Games</u></a> - Learn computer programming skills with fun games.</li>
            <li><a href="https://www.codemoji.com/" target="_blank"><u>Codemoji</u></a> - Learn to code with emojis!</li>
            <li><a href="https://www.codemonkey.com/" target="_blank"><u>CodeMonkey</u></a> - Learn to code with a fun game.</li>
            <li><a href="https://www.tynker.com/" target="_blank"><u>Tynker</u></a> - Learn to code with games and puzzles.</li>
            <li><a href="https://www.khanacademy.org/computing" target="_blank"><u>Khan Academy</u></a> - Learn to code with JavaScript and HTML/CSS.</li>
            <li><a href="https://www.kodable.com/" target="_blank"><u>Kodable</u></a> - Learn to code with games and puzzles.</li>
            <li><a href="https://www.codecademy.com/" target="_blank"><u>Codecademy</u></a> - Learn to code interactively, for free.</li>
            <li><a href="https://www.freecodecamp.org/" target="_blank"><u>freeCodeCamp</u></a> - Learn to code for free and help nonprofits.</li>
        </ul>
        </main>
    )
}

export default Home
