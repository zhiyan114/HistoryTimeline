import React from "react"
import { Chrono } from "react-chrono";

/*
Image Import
*/
import ChinaWar from './img/20080310-Korean war, anti American 2.jpg'
import SurpriseAttack from './img/Battle_of_Inchon.png'
import SouthPushBack from './img/450px-Central_Korea_during_Communist_Spring_Offensive_1951.jpg'
import MacArthurRemoved from './img/macarthur-truman-gettyimages-514866108.jpg'
import UNRetake from './img/map2.gif'
import Ceasefire from './img/3HHL4MIWTCMHSGVWATS5T3KLBE.jpg'
import SEATO from './img/SEATO-nations-leaders-portrait-Manila-Conference-1966.jpg'
const items = [
  {
    title: "Sources",
    cardTitle: "The Korean War",
  },
  {
  title: "August 1, 1927 – December 7, 1949",
  cardTitle: "Civil War in China",
  cardDetailedText: `The Civil War in china ended with the communist party taking control of the land which resulted in the spread of communism, the thing the U.S. was trying to avoid
  This is a political issue because not only was there a civil war, the Chinese economy was collapsing, where the more popular had more control over China..
  `,
  media: {
    type: "IMAGE",
    source: {
      url: "https://cdn.britannica.com/49/75649-050-757303E9/Mao-Zedong-group-followers-1944.jpg?w=690&h=388&c=crop"
    }
  }
},
{
  title: "September 1, 1939 – September 2, 1945",
  cardTitle: "WWII",
  cardDetailedText: `Right after WWII (or the defeat of Japan), the Korean peninsula was given to the U.S. and Soviet which both then proceeded to separate the north and south.
  This is a political issue because the two major military countries wanted the lands to be splitted and since each side views themselves as the “original” korea, it causes a tension between the two
  `,
  media: {
    type: "IMAGE",
    source: {
      url: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTU3ODc5MDgxODY3ODgwMTU5/hitler-at-dortmund-rally.jpg"
    }
  }
},
{
  title: "August 1945 - 1948",
  cardTitle: "Korea divided into two countries",
  cardDetailedText: `Japan was forced to surrender all of their colonies to the Soviets and the United States after losing WWII.
  This is an economic problem because Japan fought wars to conquer Korea, but after WWII, Japan lost all power over it, after which the US and the Soviets divided it 
  `,
  media: {
    type: "IMAGE",
    source: {
      url: "https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU3ODc4NjgzMjQwNDQxNTY3/image-placeholder-title.webp"
    }
  }
},
{
  title: "October 1, 1949",
  cardTitle: "Mao Zedong founds the People’s Republic of China",
  cardDetailedText: `communist revolutionary Mao Zedong officially proclaims the existence of the People’s Republic of China by preserve Chinese communism by purging remnants of capitalist and traditional elements from Chinese society, and to re-impose Mao Zedong Thought
  This is a social and Economic  problem because he modernized China with an attempt to modernize education, women's rights, sanitation, and health care but he also purged
  `,
  media: {
    type: "IMAGE",
    source: {
      url: "https://i.guim.co.uk/img/media/4950e492ea2a1871de4f7f9cac2ff1d047acf9a0/0_481_1999_1198/master/1999.jpg?width=620&quality=85&auto=format&fit=max&s=241e7e5f4be4d03e5c96621c00ec431f"
    }
  }
},
{
  title: "1950 - 1953",
  cardTitle: "North Korea invaded South Korea and nearly drives them off the peninsula",
  cardDetailedText: `This is the cause of the Korean war. After forming the peninsula, that didn't stop the dispute between the two sides. This of course leads to the invasion of the South side from the North. The reason that this was successful was because at the time, North Korean’s soldier were much more well trained while the South wasn't as much. The only way for the south to push the North back was from the U.S. assistant.
  This is a Political issue because either side wanted to have the whole land but the North wanted to invade first to get it back while ultimately leads to a failure once the other countries (i.e. The U.S.) are involved in this.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: "https://cdn.britannica.com/32/151332-050-AAE0BAC1/civilians-tank-M26-Pershing-Korean-War-June-1951.jpg?w=690&h=388&c=crop"
    }
  }
},
{
  title: "June 27, 1950",
  cardTitle: "U.S. enters the war",

  cardDetailedText: `During the Cold War, Americans were convinced the Soviet Union posed a grave threat to their country and the rest of the planet and that, as the leader of the free world, the United States had a responsibility to resist Soviet expansionism.
  This is a Social conflict because  The United States wanted to expand its influence as well by protecting or installing democratic governments throughout the world as well as setting up blockades to keep out the communist Soviet Union.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: "https://media.nationalgeographic.org/assets/photos/7b3/324/7b3324ff-6348-45b1-97ae-264118326311_r646x508.jpg?9b6335850dcd29fba00acefc82e1275a814abb78"
    }
  }
},
{
  title: "Nov. 25-26, 1950",
  cardTitle: "China enters the war",
  cardDetailedText: `This is the consequence of the Korean War. Both the U.S. and China at that time showed nationalism. China here wanted to prove the superiority of communist party. Seeing that the U.S. and South Korea are weakening the North side, they wanted to be involved and support them. Because North Korea was a communist party, if they didn’t do anything then it could be a sign that shows the weakness of communism and the superiority of Democracy.
  This definitely seems like a political issue because a lot of the Chinese at that time were in the idea that Communism was superior and looking at North Korea which is a communist party weakening could show the world the weakness of that party so China came in and assisted so that the reputation of Communist party wouldn’t get ruined.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: ChinaWar
    }
  }
},
{
  title: "September 15, 1950",
  cardTitle: "Surprise landing at Inchon & pushing N. Korea back to Chinese border",
  cardDetailedText: `This is the consequence of the Korean War. Before the landing of Inchon, The North Koreans invaded the south. After giving orders to retreat, they failed to do it. So in response, the United Nations wanted the members to provide military assistance for the south. After arriving at the coast of Korea, they're able to help South Korea to push back the North and eventually take back control on their own side.
  Social problems since this ended with An estimated 800,000 communist soldiers were killed, and more than 200,000 North Korean civilians died.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: SurpriseAttack
    }
  }
},
{
  title: "January 25 1951",
  cardTitle: "South Korea pushed back to 37th Parallel",
  cardDetailedText: `Communists push UN forces to 37th parallel
  Political due to  Communists pushing back the United Nation back
  `,
  media: {
    type: "IMAGE",
    source: {
      url: SouthPushBack
    }
  }
},
{
  title: "April 1951",
  cardTitle: "MacArthur removed from leadership in Korea",
  cardDetailedText: `In April 1951, President Truman fired MacArthur and replaced him with Gen. Matthew Ridgway after MacArthur  asked for permission to bomb communist China and use Nationalist Chinese forces from Taiwan against the People’s Republic of China.
  This was a social problem because Americans began to understand that his policies and recommendations might have led to a massively expanded war in Asia.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: MacArthurRemoved
    }
  }
},
{
  title: "May 1951",
  cardTitle: "U.N. retakes up to the 38th Parallel",
  cardDetailedText: `North Korea troops streamed across the 38th parallel to try and reunite Korea by force. The U.S. under a UN fought with the Republic of Korea against NK and some Chinese communists.
  This is a political problem since the 38th line was chosen by U.S. military planners at the Potsdam Conference near the end of World War II as an army boundary, north of which the U.S.S.R. was to accept the surrender of the Japanese forces in Korea and south of which the Americans were to accept the Japanese surrender.
 `,
  media: {
    type: "IMAGE",
    source: {
      url: UNRetake
    }
  }
},
{
  title: "December 1951 - July 1953",
  cardTitle: "Ceasefire declared",
  cardDetailedText: `U.S. Army Lt. Gen. William K. Harrison, Jr., senior delegate, United Nations Command Delegation; North Korean Gen. Nam Il, senior delegate, Delegation of the Korean People's Army and the Chinese People's Volunteers, signed 18 official copies of the tri-language Korean Armistice Agreement.
  Social conflict because It was the end of the longest negotiated armistice in history: 158 meetings spread over two years and 17 days.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: Ceasefire
    }
  }
},
{
  title: "September 8 1954",
  cardTitle: "Creation of SEATO (Southeast Asia Treaty Organization)",
  cardDetailedText: `The formation of SEATO was a response to the demand that the Southeast Asian area be protected against communist expansionism, especially as manifested through military aggression in Korea and Indochina and through subversion backed by organized armed forces in Malaysia and the Philippines.
  SEATO worked to strengthen the economic foundations and living standards of the Southeast Asian States. Beyond its activities, the SEATO charter was also vitally important to the American rationale for the Vietnam War.
  `,
  media: {
    type: "IMAGE",
    source: {
      url: SEATO
    }
  }
},
];

function App() {
  return (
    <div>
      <Chrono items={items} mode="VERTICAL">
        <ul>
        <li>https://www.britannica.com/event/Chinese-Civil-War</li>
        <li>https://history.state.gov/milestones/1945-1952/chinese-rev</li>
        <li>https://www.history.com/news/korean-war-causes-us-involvement</li>
        <li>https://www.deseret.com/2014/11/26/20553621/this-week-in-history-china-enters-the-korean-war</li>
        <li>https://www.nationalgeographic.org/thisday/jun27/us-enters-korean-war/</li>
        <li>https://www.scienceabc.com/social-science/how-did-japan-losing-world-war-ii-contribute-to-the-split-of-korea.html</li>
        <li>https://prezi.com/o7gtawgzr4tf/how-did-the-us-contain-communism/</li>
        <li>https://www.studypool.com/discuss/3024897/Why-the-United-States-was-unable-to-avoid-entering-a-cold-war-with-Soviet-Union-history-homework-help</li>
        <li>https://www.history.com/topics/korea/korean-war</li>
        <li>https://www.britannica.com/event/Korean-War/Invasion-and-counterinvasion-1950-51</li>
        <li>https://www.history.com/this-day-in-history/truman-relieves-macarthur-of-duties-in-korea</li>
        <li>https://www.history.com/topics/korea/inchon</li>
        <li>https://www.britannica.com/place/38th-parallel</li>
        <li>https://quizlet.com/198484650/193-flash-cards/</li>
        <li>https://www.scienceabc.com/social-science/how-did-japan-losing-world-war-ii-contribute-to-the-split-of-korea.html</li>
        <li>https://quizlet.com/204542889/ush-unit-9-study-guide-flash-cards/</li>
        <li>https://www.ourdocuments.gov/doc.php?flash=false&doc=85</li>
        <li>https://history.state.gov/milestones/1953-1960/seato</li>
        <li>https://www.history.com/topics/korea/inchon</li>
        </ul>
        </Chrono>
    </div>
  );
}

export default App;
