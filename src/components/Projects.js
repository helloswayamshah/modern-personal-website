import React,{ useEffect, useState, useRef } from "react";
import { forwardRef } from "react"
import "../styles/Projects.css"
import { Octokit } from "octokit";
import ProjectCard from "./ProjectCard";
import '../index.css';
import { useMediaQuery } from 'react-responsive';
import MobileProjectCard from "./MobileProjectCard";

function Projects(props, ref) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isSmallerScreen = useMediaQuery({ query: '(min-width: 992px)' });
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const isSmallTablet = useMediaQuery({ query: '(min-width: 601px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isPotrait = useMediaQuery({ query: '(orientation: portrait)' });
    
    const firstRender = useRef(true);

    const [projects, setProjects] = useState([]);

    const fetchRepoInfo = async (repoName) => {
        const octokit1 = new Octokit({auth: process.env.REACT_APP_GITHUB_API});

        const response1 = await octokit1.request('GET /repos/{owner}/{repo}', {
            owner: 'helloswayamshah',
            repo: repoName, 
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'User-Agent': 'helloswayamshah'
            }
        });
    
        const name = response1.data.name;
        const description = response1.data.description;
        const startTime = response1.data.created_at;
        const endTime = response1.data.pushed_at;
        const tech = response1.data.topics;
        const githublink = response1.data.html_url;
        const websitelink = response1.data.homepage;

        var imagelink = "";

        const octokit2 = new Octokit({auth: process.env.REACT_APP_GITHUB_API});
        
        try {
            const response2 = await octokit2.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: 'helloswayamshah',
                repo: repoName,
                path: 'project-demo.png',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                    'User-Agent': 'helloswayamshah'
                }
            });

            imagelink = response2.data.download_url;
                
        } catch (error) {
            console.error(error);
        };

    
        const projectInfo = { 
            projectName: name, 
            desc: description, 
            startTime: startTime,
            endTime: endTime, 
            tech: tech, 
            githublink: githublink, 
            websitelink: websitelink,
            imageSrc: imagelink
        };
    
        return projectInfo;
        
    }


    const fetchRepos = async () => {
        const octokit = new Octokit({auth: process.env.REACT_APP_GITHUB_API});
        

        await octokit.request('GET /users/{username}/repos', {
            username: 'helloswayamshah', headers: {
                'X-GitHub-Api-Version': '2022-11-28', 
                'User-Agent': 'helloswayamshah'
              }
        }).then( async (response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].name === "helloswayamshah") {
                    continue;
                }
                var info = await fetchRepoInfo(response.data[i].name);
                setProjects(projects => [...projects, info]);
            }
        });
    };

    useEffect(() => {
        if (firstRender.current) {
            fetchRepos();
            firstRender.current = false;
        }
    });

    projects.sort((a, b) => {
        const aTime = new Date(a.startTime);
        const bTime = new Date(b.startTime);
        return bTime - aTime;
    });

    return (isDesktopOrLaptop || isSmallerScreen || !isPotrait) ? (
            <div className="section" id='project-section' ref={ref}>
                <h1 className="title">Projects</h1>
                <div id="projects">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} props={project}/>
                    ))}
                </div>
            </div>) : ((isMobile || isSmallTablet || isTabletScreen) && isPotrait) ? (
                <div className="mobile-section" id="mobile-project-section" ref={ref}>
                    <h1 className="mobile-title">Projects</h1>
                    <div id="mobile-projects">
                        {projects.map((project, index) => (
                        <MobileProjectCard key={index} props={project}/>
                        ))}
                    </div>
                </div>
            ) : (<div className="mobile-section" id="mobile-project-section" ref={ref}>
                <h1 className="mobile-title">Projects</h1>
                <div id="mobile-projects">
                    {projects.map((project, index) => (
                    <MobileProjectCard key={index} props={project}/>
                    ))}
                </div>
            </div>)
        
}

export default forwardRef(Projects);