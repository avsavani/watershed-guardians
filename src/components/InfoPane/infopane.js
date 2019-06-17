import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './infopane.css'

class InfoPane extends Component{
     render(){
         return(
     <Tabs className = 'react-tabs'>
        <TabList className = 'react-tab-list'>
        <Tab>Instructions</Tab>
        <Tab>About</Tab>
        <Tab>what can you do?</Tab>
        <Tab>About the tests</Tab>
        </TabList>
        <TabPanel>
        <p>
            1. The markers on the map are locations of our sampling sites. <br />
            2. Click on the marker to render graphs specific to that site. <br />
            3. Each graph is of a scientific test conducted on the water source. <br />

            4. To get a 3D view hold down the right key of mouse and move :)
        </p>
        <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
            Wikipedia
            </a>
        </p>
        </TabPanel>
        <TabPanel>
        <p>
            <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
            attack by Bowser. She often plays the damsel in distress role within the series and
            is the lead female. She is often portrayed as Mario's love interest and has appeared
            in Super Princess Peach, where she is the main playable character.
        </p>
        <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
            Wikipedia
            </a>
        </p>
        </TabPanel>
        <TabPanel>
        <p>
            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
            romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
            video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
            Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
            in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
            and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
            Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
            game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
            characterized by their variety of colors.
        </p>
        <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
            Wikipedia
            </a>
        </p>
        </TabPanel>
        <TabPanel>
        <p>
            <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
            appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
            he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
            attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
            who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
            takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
            Super Mario 3D World, and Captain Toad: Treasure Tracker.
        </p>
        <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
            Wikipedia
            </a>
        </p>
        </TabPanel>
  </Tabs>
         );
     }
 }  
  
export default InfoPane;

