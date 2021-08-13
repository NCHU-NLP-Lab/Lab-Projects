import React from 'react'
import './index.css'
import { FaGithub } from 'react-icons/fa'

function Tag(props) {
    return (
        <span className="tag me-1 p-1">{props.name}</span>
    )
}

function LinkButton(props) {
    let { style = 'btn-primary' } = props
    return (
        <a
            rel="noreferrer"
            target="_blank"
            href={props.href}
            className={`btn btn-sm m-1 ${style}`}>{props.name}
        </a>
    )
}

function ExtraHead(props) {
    if (props.gitRepo === "") {
        return <></>
    }
    return (
        <a
            rel="noreferrer"
            target="_blank"
            href={`https://github.com/${props.gitRepo}`}
            className="extra-head"
        >
            <FaGithub className="me-1" size={20} />
            <img className="me-1" src={`https://img.shields.io/github/stars/${props.gitRepo}?color=green`} alt="" srcset="" />
        </a>
        // <span className="extra-head">props</span>
    )
}

export default function index(props) {
    console.log(Object.keys(props))
    let { tags = [], links = [], authors = [], image = "/assets/images/lab-logo.png", gitRepo = '' } = props
    if (image[0] === '/') { // 如果圖片存放在本地
        image = process.env.PUBLIC_URL + image
    }
    return (
        <div id="ProjCard" className="card" style={{ height: '100%' }}>
            <div className="main-img-container">
                <ExtraHead gitRepo={gitRepo} />
                <img src={image} className="main-img" alt="..." />
            </div>

            <div className="card-body">
                <hr className="mb-2" />
                <h5 className="card-title">{props.fullName}</h5>
                {tags.map((tag, i) => {
                    return <Tag key={i} name={tag} />
                })}
                <p className="card-text mt-1 text-block-config">{props.context}</p>
                <div className="card-buttons">
                    {links.map((link, i) => {
                        return <LinkButton key={i} {...link} />
                    })}
                </div>
            </div>
            <div className="card-footer">
                <div className="w-100 text-center">
                    {authors.map((author, i) => {
                        return (
                            <a key={i} className="me-1 author-link" href={author.link}>{author.name}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
