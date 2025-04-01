import React, { useEffect, useRef, useState } from "react";
import { fetchTweet } from "react-tweet/api";

const CustomTwitterEmbed = ({tweetUrl}) => {

    const [embedHtml,setEmbedHtml] = useState(null);

    useEffect(() => {

        const fetchTweet = async () => {
            try{
        
        // Twitter's oEmbed API endpoint with minimal parameters
        const oEmbedUrl = new URL('https://publish.twitter.com/oembed');
        oEmbedUrl.searchParams.append('url', tweetUrl);
        oEmbedUrl.searchParams.append('omit_script', 'true'); // We'll load the script ourselves
            
            const response = await fetch(oEmbedUrl);

            if (!response.ok) {
                throw new Error(`Twitter API error: ${response.status}`);
              }

              const data = await response.json();
              setEmbedHtml(data.html);
              console.log(data.html);
              
              if (!window.twttr) {
                const script = document.createElement('script');
                script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
                script.onload = () => {
                  if (window.twttr) {
                    window.twttr.widgets.load();
                  }
                };
                document.body.appendChild(script);
              } else {
                window.twttr.widgets.load();
              }

              if (tweetUrl) {
                fetchTweet();
              } else {
               console.log("error hehe");
              }




            }
            catch(e){
                console.error('Error fetching tweet:', e);
            }
        }
        }, [tweetUrl]);
            

        return (
            <div dangerouslySetInnerHTML={{ __html: embedHtml ? embedHtml : "hehe" }} />
          );

    };
    export default CustomTwitterEmbed;