import React, { useState } from 'react';
import './styles/main.css'
import Home from './Gitlab_icons/Home'
import Issues from './Gitlab_icons/Issues'
import MergeRequests from './Gitlab_icons/MergeRequests'
import TodoDone from './Gitlab_icons/TodoDone'
import DocText from './Gitlab_icons/DocText'
import Rocket from './Gitlab_icons/Rocket'
import CloudGear from './Gitlab_icons/CloudGear';
import Package from './Gitlab_icons/Package';
import Snippet from './Gitlab_icons/Snippet';
import Users from './Gitlab_icons/Users';
import Settings from './Gitlab_icons/Settings';
import Question from './Gitlab_icons/Question';
import Folder from './Gitlab_icons/Folder';
import Profile from './Gitlab_icons/Profile';
import AngleDown from './Gitlab_icons/AngleDown';
import FileAdditionSolid from './Gitlab_icons/FileAdditionSolid';
import ArrowRight from './Gitlab_icons/AngleRight';
import Lock from './Gitlab_icons/Lock';
import Notifications from './Gitlab_icons/Notifications';
import Star from './Gitlab_icons/Star';
import Fork from './Gitlab_icons/Fork';
import Commits from './Gitlab_icons/Commits';
import Branch from './Gitlab_icons/Branch';
import Tags from './Gitlab_icons/Tags';
import DocCode from './Gitlab_icons/DocCode';
import Disk from './Gitlab_icons/Disk';
import Plus from './Gitlab_icons/Plus';
import Download from './Gitlab_icons/Download';
import ClipBoard from './Gitlab_icons/Clipboard';
import FileAddition from './Gitlab_icons/FileAddition';
import Git from './Gitlab_icons/Git';
import Javascript from './Gitlab_icons/Javascript';
import Nodejs from './Gitlab_icons/Nodejs';
import Chart from './Gitlab_icons/Chart';
import Book from './Gitlab_icons/Book';
import Gitlab from './Gitlab_icons/Gitlab';
import AngleDoubleLeft from './Gitlab_icons/AngleDoubleLeft';
import AngleDoubleRight from './Gitlab_icons/AngleDoubleRight';
import Ellipsis from './Gitlab_icons/Ellipsis';
import Close from './Gitlab_icons/Close';


function App() {
  const [state, setState] = useState(false)
  const [collapseState, setcollapseState] = useState(false)
  const [value, setValue] = useState('')
  const [hover, setHover] = useState(false)
  const [hover_1, setHover_1] = useState(false)
  const [hover_2, setHover_2] = useState(false)
  const [hover_3, setHover_3] = useState(false)
  const [row_id, setRow_id] = useState(null)


  const [id, setId] = useState(null)
  const [id_1, setId_1] = useState(null)
  const [id_2, setId_2] = useState(null)
  const [sidebar_width, setSidebar_width] = useState('w-56')
  const [Title_padding, setTitle_padding] = useState('p-4')

  const [sidebar_r_border, setSidebar_r_border] = useState('')



  const sidebar_i_c = '#707070'
  const sidebar_h_c = '#000000'

  const nav_bar_e_i = '#fff'
  const nav_bar_h_c = '#cbd5e0'

  const nav_menu = [
    {
      id: 0,
      name: 'Projects'

    },
    {
      id: 1,
      name: 'Groups'
    },
    {
      id: 2,
      name: 'More'
    }
  ]
  const navbar_end_icons = [
    {
      isarrow: false,
      icon: < Issues fill={id_1 === 0 && hover_1 ? `${nav_bar_e_i}` : `${nav_bar_h_c}`} />
    },
    {
      isarrow: false,
      icon: < MergeRequests fill={id_1 === 1 && hover_1 ? `${nav_bar_e_i}` : `${nav_bar_h_c}`} />,
    },
    {
      isarrow: false,
      icon: < TodoDone fill={id_1 === 2 && hover_1 ? `${nav_bar_e_i}` : `${nav_bar_h_c}`} />,
    },
    {
      isarrow: true,
      icon: < Question fill={id_1 === 3 && hover_1 ? `${nav_bar_e_i}` : `${nav_bar_h_c}`} />,
    },
    {
      isarrow: true,
      icon: < Profile fill={id_1 === 4 && hover_1 ? `${nav_bar_e_i}` : `${nav_bar_h_c}`} />
    }
  ]
  const sidebar_lists = [
    {
      name: 'Repository',
      icon: < DocText fill={id === 0 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
      pill: false
    },
    {
      name: 'Issues',
      icon: < Issues fill={id === 1 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
      pill: true
    },
    {
      name: 'Merge Requests',
      pill: true,
      icon: < MergeRequests fill={id === 2 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'CI/CD',
      pill: false,
      icon: < Rocket fill={id === 3 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Operations',
      pill: false,
      icon: < CloudGear fill={id === 4 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Packages & Registeries',
      pill: false,
      icon: < Package fill={id === 5 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Analytics',
      pill: false,
      icon: < Chart fill={id === 6 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Wiki',
      pill: false,
      icon: < Book fill={id === 7 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Snippets',
      pill: false,
      icon: < Snippet fill={id === 8 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Members',
      pill: false,
      icon: < Users fill={id === 9 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    },
    {
      name: 'Settings',
      pill: false,
      icon: < Settings fill={id === 10 && hover ? `${sidebar_h_c}` : `${sidebar_i_c}`} />,
    }
  ]

  const dashed_box = [
    'Add README', 'Add LICENSE', 'Add CHANGELOG', 'Add CONTRIBUTING', 'Add Kubernetes cluster', 'Set up CI/CD'
  ]

  const input_change = (e) => {
    setValue(e.target.value)
    if (e.target.value !== (null || '')) {
      setState(true)
    }
    else {
      setState(false)
    }
  }
  const table_data = [
    {
      Name: 'bin',
      icon: <Folder fill="#707070" />,
      last_commit: 'first commit',
      last_update: '5 months ago'
    },
    {
      Name: 'public',
      icon: <Folder fill="#707070" />,
      last_commit: 'first commit',
      last_update: '5 months ago'
    },
    {
      Name: 'routes',
      icon: <Folder fill="#707070" />,
      last_commit: 'second commit',
      last_update: '5 months ago'
    },
    {
      Name: 'views',
      icon: <Folder fill="#707070" />,
      last_commit: 'second commit',
      last_update: '5 months ago'
    },
    {
      Name: '.gitignore',
      icon: <Git fill="#707070" />,
      last_commit: 'second commit',
      last_update: '5 months ago'
    },
    {
      Name: 'app.js',
      icon: <Javascript fill="#707070" />,
      last_commit: 'added session cookie feature',
      last_update: '5 months ago'
    },
    {
      Name: 'package-lock.json',
      icon: <Nodejs fill="#707070" />,
      last_commit: 'added session cookie feature',
      last_update: '5 months ago'
    },
    {
      Name: 'package.json',
      icon: <Nodejs fill="#707070" />,
      last_commit: 'added session cookie feature',
      last_update: '5 months ago'
    }
  ]


  return (
    <div className="flex flex-col h-screen overflow-y-hidden text-global-text-color">
      {/* Nav-Bar */}
      <nav className="flex bg-gitlab_nav_bg items-center justify-between h-10 px-2">
        <div className="flex flex-row space-x-1">
          {/* Gitlab's Logo */}
          <span className="flex-shrink-0 flex flex-row space-x-2 items-center py-1 px-1 rounded-sm cursor-pointer hover:bg-gitlab_pills_bg-less-opaque" >
            <img src={require(`./assets/logo.svg`)} className="h-6 w-6 " />
            <span className="hidden sm:hidden md:block">
              <Gitlab height="14" width="55" fill="#fff" />
            </span>
          </span>
          {/* Nav Menu */}
          {
            nav_menu.map((item, index) => (
              <span
                key={index}
                className="
              cursor-pointer 
              flex
              px-2 
              py-1
              items-center
              space-x-1
              hover:bg-gitlab_pills_bg-less-opaque
              text-gray-400 font-medium 
              hover:text-white 
              text-xs 
              rounded-sm"
                onMouseOver={() => {
                  setHover_3(true);
                  setId_2(index);
                }
                }
                onMouseLeave={() => setHover_3(false)}
              >
                <span>
                  {item.name}
                </span>
                <span className="flex-shrink-0">
                  <AngleDown fill={id_2 === index && hover_3 ? "#fff" : "#cbd5e0"} />
                </span>
              </span>
            ))
          }
        </div>
        <div className="hidden space-x-2 text-gray-400 items-center sm:hidden md:flex">
          {/* add logo */}
          <span className="flex flex-shrink-0 items-center space-x-1 hover:bg-gitlab_pills_bg-less-opaque cursor-pointer rounded-sm py-2 px-1" onMouseOver={() => setHover_2(true)} onMouseLeave={() => setHover_2(false)} >
            <FileAdditionSolid fill={hover_2 ? "#fff" : "#cbd5e0"} />
            <AngleDown fill={hover_2 ? "#fff" : "#cbd5e0"} />
          </span>
          {/* Input field */}
          <span className="hidden items-center relative text-sm md:hidden lg:flex">
            <input
              type="text"
              className="w-input_width placeholder-gray-500 focus:bg-white rounded-sm px-1 py-1 outline-none bg-gitlab_pills_bg-less-opaque"
              placeholder="Search or jump to..."
              value={value}
              onChange={(e) => input_change(e)}
            />
            <span className="flex-shrink-0 absolute right-0 mr-2">
              {state
                ?
                <Close fill="#cbd5e0" onClick={() => setValue('') || setState(false)} />
                :
                <img src={require('./assets/search.svg')} />
              }
            </span>
          </span>
          {/* input field for md resolution devices */}
          <span className="hidden hover:bg-gitlab_pills_bg-less-opaque cursor-pointer rounded-sm py-2 px-2 md:block lg:hidden xl:hidden">
            <img src={require('./assets/search.svg')} />
          </span>
          {/* Issues, merge requests, ListTask icons, Question & Profile*/}
          {
            navbar_end_icons.map((item, index) => (
              <span
                key={index}
                className="flex items-center flex-shrink-0 hover:bg-gitlab_pills_bg-less-opaque cursor-pointer rounded-sm py-2 px-2 space-x-1"
                onMouseOver={() => {
                  setId_1(index);
                  setHover_1(true)
                }}
                onMouseLeave={() => setHover_1(false)}
              >
                {item.icon}
                {
                  item.isarrow && <AngleDown fill={id_1 === index && hover_1 ? '#fff' : "#cbd5e0"} />
                }
              </span>
            ))
          }
        </div>
        {/* three dots for mobile devices */}
        <div className="flex items-center space-x-2 cursor-pointer md:hidden lg:hidden xl:hidden" >
          <span className="border-l border-gitlab_pills_bg-less-opaque h-6" />
          <Ellipsis height="12" width="12" fill="#cbd5e0" />
        </div>
      </nav>
      <div className="flex-1 flex flex-row overflow-y-hidden">
        {/* Side-Bar */}
        <div className={`hidden ${sidebar_width} bg-gray-100 overflow-x-hidden overflow-y-hidden ${sidebar_r_border} space-y-2 sm sm:hidden md:flex md:flex-col `}>
          {/* Repository Title */}
          <div className="overflow-y-auto overflow-x-hidden">
            <span className={`flex  space-x-2 items-center ${Title_padding} hover:bg-gitlab_pills_bg-less-opaque cursor-pointer `}>
              <span className="flex flex-shrink-0 h-10 w-10 bg-teal-300 items-center text-gray-800 font-bold justify-center">
                A
              </span>
              {collapseState ? null : <span className="text-sm font-semibold text-gray-800">
                Authentication
              </span>}
            </span>
            {/* Active Lists */}
            <div className="flex px-3 py-4 space-x-2 items-center border-l-4 border-gitlab_nav_bg bg-purple-200 text-sm cursor-pointer">
              <Home color='#292961' />
              {collapseState ? null :
                <span className="text-sm font-semibold text-gitlab_nav_bg">Project overview</span>
              }
            </div>
            {/* Inactive Lists */}
            <span>
              <span className="flex flex-col">
                {
                  sidebar_lists.map((items, index) => (
                    <span
                      key={index}
                      className="flex flex-no-wrap hover:bg-gitlab_pills_bg-less-opaque hover:text-black pl-4 py-3 space-x-2 cursor-pointer items-center"
                      onMouseOver={() => {
                        setId(index);
                        setHover(true);
                      }
                      }
                      onMouseLeave={() => setHover(false)}
                    >
                      <span>
                        {items.icon}
                      </span>
                      {
                        collapseState
                          ?
                          null
                          :
                          <span className="text-sm"> {items.name} </span>
                      }
                    </span>
                  ))
                }
              </span>
            </span>
            <span className="inline-block h-6" ></span>
          </div>
          {/* Collapse btn */}
          <div
            className="flex space-x-2 items-center cursor-pointer pl-4 border-t border-gray-400 py-3 hover:bg-gitlab_pills_bg-less-opaque text-sm"
            onClick={() => {
              setSidebar_width(sidebar_width === 'w-16' ? 'w-56' : 'w-16');
              setcollapseState(!collapseState);
              setTitle_padding(Title_padding === 'p-2' ? 'p-4' : 'p-2')
              setSidebar_r_border(sidebar_r_border === 'border-r border-gray-400' ? '' : 'border-r border-gray-400')
            }}
          >
            {collapseState ? <AngleDoubleRight fill="currentColor" /> :
              <span>
                <AngleDoubleLeft fill="currentColor" />
              </span>}
            {collapseState ? null :
              <span>
                Collapse Sidebar
            </span>}
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col py-5 px-5 overflow-y-auto overflow-x-hidden sm:px-5 md:px-5 lg:px-20">
          {/* Breadcrumb */}
          <div className="flex flex-row space-x-1 items-center text-xs">
            <span className="hover:underline cursor-pointer">
              Fuzzyl0glc
            </span>
            <span >
              <ArrowRight fill="currentColor" width="10" />
            </span>
            <span className="hover:underline cursor-pointer">
              Authentication
            </span>
            <span>
              <ArrowRight fill="currentColor" width="10" />
            </span>
            <span className="hover:underline cursor-pointer text-black">
              Details
            </span>
          </div>
          {/* Line Break */}
          <span className="border-t my-2" />
          {/* Repo's Title */}
          <div className="flex flex-col mt-2 mb-3 space-y-4 sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center">
            <span className="flex-1 flex space-x-2 items-center">
              <span className="flex h-16 w-16 bg-teal-300 items-center text-2xl rounded-md text-gray-800 font-semibold justify-center">
                A
              </span>
              <span className="flex flex-col">
                <span className="flex items-center space-x-1">
                  <span className="text-black text-xl font-bold">
                    Authentication
                  </span>
                  <span>
                    <Lock fill="currentColor" />
                  </span>
                </span>
                <span className="text-sm">
                  Project ID: 16320539
                </span>

              </span>
            </span>
            {/* Repo's Pills */}
            <span className="flex space-x-2">
              {/* 1 */}
              <span className=" flex border border-gray-400  rounded h-6 px-2 hover:bg-gitlab_pills_bg-less-opaque cursor-pointer space-x-1 items-center">
                <Notifications fill="currentColor" height="14" />
                <AngleDown fill="currentColor" />
              </span>
              {/* 2 */}
              <span className="flex border border-gray-400 rounded  h-6 cursor-pointer items-center">
                <span className="flex-1 flex space-x-1 items-center hover:bg-gitlab_pills_bg-less-opaque h-full px-2">
                  <Star fill="currentColor" height="14" />
                  <p className="text-sm text-black">Star</p>
                </span>
                <span className="border-l h-full border-gray-400" />
                <span className="flex-1 py-1 px-2 hover:underline">0</span>
              </span>
              {/* 3 */}
              <span className="flex border border-gray-400  h-6 rounded cursor-pointer items-center">
                <span className="flex-1 flex space-x-1 items-center hover:bg-gitlab_pills_bg-less-opaque h-full py-1 px-2">
                  <Fork fill="currentColor" height="14" />
                  <p className="text-sm text-black">Fork</p>
                </span>
                <span className="border-l h-full border-gray-400" />
                <span className="flex-1 py-1 px-2 hover:underline">0</span>
              </span>
            </span>
          </div>
          {/* Repo's Status */}
          <div className="flex flex-wrap">
            {/* 1 */}
            <span className="flex p-2 space-x-1 items-center text-sm">
              <Commits fill="currentColor" />
              <span className="hover:underline cursor-pointer ">
                <span className="font-bold text-black">4</span>
                <span className="px-0"> </span>
                <span className="text-black">Commits</span>
              </span>
            </span>
            {/* 2 */}
            <span className="flex p-2 space-x-1 items-center text-sm">
              <Branch fill="currentColor" />
              <span className="hover:underline cursor-pointer ">
                <span className="font-bold text-black">1</span>
                <span className="px-0"> </span>
                <span className="text-black">Branch</span>
              </span>
            </span>
            {/* 3 */}
            <span className="flex p-2 space-x-1 items-center text-sm">
              <Tags fill="currentColor" className="transform -rotate-45" />
              <span className="hover:underline cursor-pointer ">
                <span className="font-bold text-black">0</span>
                <span className="px-0"> </span>
                <span className="text-black">Tags</span>
              </span>
            </span>
            {/* 4 */}
            <span className="flex p-2 space-x-1 items-center text-sm">
              <DocCode fill="currentColor" />
              <span className="hover:underline cursor-pointer ">
                <span className="font-bold text-black">666 KB</span>
                <span className="px-0"> </span>
                <span className="text-black">Files</span>
              </span>
            </span>
            {/* 5 */}
            <span className="flex p-2 space-x-1 items-center text-sm">
              <Disk fill="currentColor" />
              <span className="hover:underline cursor-pointer ">
                <span className="font-bold text-black">666 KB</span>
                <span className="px-0"> </span>
                <span className="text-black">Storage</span>
              </span>
            </span>
          </div>
          {/* PL Distributions */}
          <div className="flex mt-4 space-x-0.1">
            {/* 1 */}
            <span
              className="flex-1 flex justify-center rounded-l-md border-t-8 border-yellow-500"
            />
            {/* 2 */}
            <span
              className="w-24 flex justify-center  w-24 border-t-8 border-red-600"
            />

            {/* 3 */}
            <span
              className="w-4 flex justify-center border-t-8 rounded-r-md border-indigo-900"
            />
          </div>
          {/* PL Statistics */}
          <div className="flex mt-2 flex-wrap space-x-2">
            <span className="flex space-x-1 items-center">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="flex items-center space-x-1 text-sm">
                <p className="text-black font-semibold">
                  Javascript
                </p>
                <p>
                  76.7%
                </p>
              </span>
            </span>
            <span className="flex space-x-1 items-center">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="flex items-center space-x-1 text-sm">
                <p className="text-black font-semibold">
                  HTML
                </p>
                <p>
                  22.2%
                </p>
              </span>
            </span>
            <span className="flex space-x-1 items-center">
              <span className="w-2 h-2 rounded-full bg-indigo-900" />
              <span className="flex items-center space-x-1 text-sm">
                <p className="text-black font-semibold">
                  CSS
                </p>
                <p>
                  1.1%
                </p>
              </span>
            </span>
          </div>
          {/* Repo's Directories operations pills */}
          <div className="flex flex-col mt-2 sm:space-y-3  lg:flex-row lg:justify-between lg:items-center">
            {/* 1 mobile version */}
            <div className="flex flex-col space-y-3 sm:hidden md:hidden lg:hidden">
              {/* 1 */}
              <span className="flex-1 items-center">
                <span className="flex items-center justify-between border rounded h-8 hover:bg-gitlab_pills_bg-less-opaque border-gray-400 p-2 cursor-pointer space-x-2 hover:border-gray-500 lg:space-x-32">
                  <span className="text-black text-sm">
                    master
                  </span>
                  <AngleDown fill="currentColor" />
                </span>
              </span>
              {/* 2 */}
              <span className="flex space-x-2 items-center">
                <p className="text-black text-sm">authentication</p>
                <span>/</span>
                <span className="flex items-center border rounded hover:bg-gitlab_pills_bg-less-opaque h-8 border-gray-400 space-x-1 p-2 cursor-pointer hover:border-gray-500">
                  <Plus fill="currentColor" />
                  <AngleDown fill="currentColor" />
                </span>
              </span>
              {/* 3 */}
              <span className="flex items-center justify-center border rounded h-8 hover:bg-gitlab_pills_bg-less-opaque border-gray-400 p-2 cursor-pointer">
                <span className="text-black text-sm">
                  History
                  </span>
              </span>
              {/* 4 */}
              <span className="flex items-center justify-center border rounded h-8 hover:bg-gitlab_pills_bg-less-opaque border-gray-400 p-2 cursor-pointer">
                <span className="text-black text-sm">
                  Find File
                  </span>
              </span>
              {/* 5 */}
              <span className="flex items-center justify-center border rounded h-8 hover:bg-gitlab_pills_bg-less-opaque border-gray-400 p-2 cursor-pointer">
                <span className="text-black text-sm">
                  Web IDE
                  </span>
              </span>
              {/* 6 */}
              <span className="flex items-center space-x-2 justify-center border rounded h-8 hover:bg-gitlab_pills_bg-less-opaque border-gray-400 p-2 cursor-pointer">
                <Download fill="currentColor" />
                <AngleDown fill="currentColor" />
              </span>
              {/* 7 */}
              <span className="flex border bg-ssh_btn  border-gray-400 rounded cursor-pointer h-8 items-center">
                <span className="flex-1 flex items-center hover:bg-ssh_btn_hover justify-center items-center h-full px-2">
                  <p className="font-semibold text-white">Copy SSH clone URL</p>
                </span>
                <span className="border-l h-full border-ssh_btn_hover" />
                <span className="cursor-pointer flex hover:bg-ssh_btn_hover items-center py-1 h-full px-2">
                  <AngleDown fill="#fff" />
                </span>
              </span>
            </div>
            {/* breakpoints except for mobile resolution */}
            {/* 1 */}
            <span className="hidden space-x-3 items-center sm:flex md:flex lg:flex">
              <span className="flex items-center border rounded h-8 hover:bg-gitlab_pills_bg-less-opaque border-gray-400 p-2 cursor-pointer space-x-2 hover:border-gray-500 sm:space-x-2 md:space-x-2 lg:space-x-2 xl:space-x-32">
                <span className="text-black text-sm">
                  master
                </span>
                <AngleDown fill="currentColor" />
              </span>
              <span className="flex space-x-2 items-center">
                <p className="text-black text-sm">authentication</p>
                <span>/</span>
                <span className="flex items-center border rounded hover:bg-gitlab_pills_bg-less-opaque h-8 border-gray-400 space-x-1 p-2 cursor-pointer hover:border-gray-500">
                  <Plus fill="currentColor" />
                  <AngleDown fill="currentColor" />
                </span>
              </span>
            </span>
            {/* 2 */}
            <span className="hidden space-x-2 items-center sm:flex md:flex lg:flex">
              <span className="flex space-x-2 items-center">
                <span className="text-sm text-black hover:bg-gitlab_pills_bg-less-opaque cursor-pointer flex items-center border rounded h-8 border-gray-400 space-x-1 p-2 cursor-pointer">
                  History
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <span className="text-sm text-black hover:bg-gitlab_pills_bg-less-opaque cursor-pointer flex items-center border rounded h-8 border-gray-400 space-x-1 p-2 cursor-pointer">
                  Find file
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <span className="text-sm text-black hover:bg-gitlab_pills_bg-less-opaque cursor-pointer flex items-center border rounded h-8 border-gray-400 space-x-1 p-2 cursor-pointer">
                  Web IDE
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <span className="flex items-center border rounded h-8 border-gray-400 hover:bg-gitlab_pills_bg-less-opaque space-x-2 p-2 cursor-pointer">
                  <Download fill="currentColor" />
                  <AngleDown fill="currentColor" />
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <span className="flex items-center border rounded h-8 bg-ssh_btn text-white hover:bg-ssh_btn_hover border-gray-400 space-x-2 p-2 cursor-pointer">
                  <p className="text-sm">Clone</p>
                  <AngleDown fill="currentColor" />
                </span>
              </span>
            </span>
          </div>
          {/* Last Commit details */}
          <div className="flex justify-between my-3 bg-gitlab_pills_bg-less-opaque items-center text-sm border border-gray-400 rounded-md p-5">
            <span className="flex flex-row space-x-2">
              <span>
                <img src={require('./assets/avatar.png')} className="h-10 rounded-full" />
              </span>
              <span className="flex flex-col">
                <span className="hover:underline font-medium text-black cursor-pointer">
                  added session cookie feature
                </span>
                <span>
                  fuzzyl0glc authored 5 months ago
                </span>
              </span>
            </span>
            <span>
              <span className="flex border border-gray-400 rounded h-8 items-center">
                <span className="flex-1 flex items-center items-center h-full px-2">
                  <p className="text-sm text-black">fbc571a6</p>
                </span>
                <span className="border-l h-full border-gray-400" />
                <span className="flex-1 cursor-pointer bg-white flex items-center py-1 h-full px-2 hover:bg-gitlab_pills_bg">
                  <ClipBoard fill="currentColor" />
                </span>
              </span>
            </span>
          </div>
          {/* File Add Suggestions */}
          <div className="flex flex-wrap">
            {
              dashed_box.map((item, index) => (
                <span key={index} className="flex m-1 p-2 space-x-2 items-center cursor-pointer border border-gray-500 h-8 border-dashed rounded-md">
                  <FileAddition fill="currentColor" />
                  <span className="text-sm">{item}</span>
                </span>
              ))
            }
          </div>
          {/* Table */}
          <div className="flex">
            <table className="table-auto w-full mt-5">
              <thead className="bg-gitlab_pills_bg-less-opaque">
                <tr className="h-10">
                  <th className="px-4 border-t border-l text-left text-black font-bold text-sm ">Name</th>
                  <th className="px-4 text-left border-t  text-black font-bold text-sm">Last Commit</th>
                  <th className="px-4 text-right border-t border-r  text-black font-bold text-sm">Last update</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {
                  table_data.map((item, index) => (
                    <tr key={index} className={row_id === index ? 'bg-table_row_bg' : null} onMouseOver={() => setRow_id(index)} onMouseLeave={() => setRow_id(null)}>
                      <td className="border-t border-l px-4 py-3 text-black border-b ">
                        <div className="flex space-x-1 items-center cursor-pointer hover:underline">
                          {item.icon}
                          <p>{item.Name}</p>
                        </div>
                      </td>
                      <td className="border-t px-4 py-3 border-b hover:underline cursor-pointer"> {item.last_commit}</td>
                      <td className="text-right pr-4 border-t border-b border-r py-3">{item.last_update}</td>
                    </tr>
                  )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
