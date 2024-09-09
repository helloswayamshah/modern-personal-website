import React,{ useEffect, useState, useRef } from "react";
import { forwardRef } from "react"
import "../styles/Projects.css"
import { Octokit } from "octokit";
import ProjectCard from "./ProjectCard";
import '../index.css';

function Projects(props, ref) {
    
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

    return (<div className="section" id='project-section' ref={ref}>
            <h1 className="title">Projects</h1>
            <div id="projects">
                {projects.map((project, index) => (
                    <ProjectCard key={index} props={project}/>
                ))}
            </div>
        </div>)
}

export default forwardRef(Projects);