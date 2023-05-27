"use client"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEnvelope, faUserAlt, faEyeSlash, faCheckCircle, faLock, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


interface Country {
  name: string;
}


const Page1: React.FC<{ onNextPage: () => void }> = ({ onNextPage }) =>  (
  <section className="sell-content flex">
    <div className="sell-prompt w-[50%] h-full">
      <h2 className=" text-5xl my-9">Start selling your prompts</h2>
      <p className="mb-3">PromptBroker is a marketplace for DALL·E, Midjourney, Stable Diffusion and GPT Prompts.</p>
      <p className="mb-3">You can sell your own prompts on PromptBroker and start earning from your Prompt Engineering skills.</p>
      <p className="mb-3">If your prompt is approved, you'll keep 80% of revenue from every sale of your prompt.</p>
      <p className="mb-3">Get selling in just 2 minutes.</p>
      <button type="submit" className="sell-prompt-button w-[200px] rounded-md text-black bg-white text-2xl px-5 font-medium h-[48px] mb-4" onClick={onNextPage}> Sell a prompt </button>
      <p>Please read our <span className="underline">prompt submission guidelines </span>before submitting your prompt so you understand what prompts can be sold on PromptBase.</p>
    </div>
    <div className="about-prompt-video w-[50%] my-10 shadow-xl">
    <iframe src="https://www.youtube.com/embed/QORw7FJ5lho" title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
    web-share" className="w-full h-[350px]"></iframe></div>
  </section>
);

const Page2: React.FC<{ onNextPage: () => void, FormContainer: any }> = ({ onNextPage, FormContainer }) => {
  return(
<div className="formdata flex flex justify-between items-start w-[100%] h-fit">
  <div className="formdata-info flex flex-col w-[50%]">
  <h2 className="prompt-center text-5xl my-10">Create an Account</h2>
  <p className="prompt-center">First, create an account with PromptBroker to begin selling.</p>
  <div className="my-5 bg-white h-[450px] rounded-md">
      <FormContainer />
  </div>
    <p className="text-[10px] mt-[-15px] mb-5"><i>By creating an account, you agree to our terms of service.</i></p>
  <button onClick={onNextPage} className="prompt-center bg-white w-[150px] p-2 h-[50px] rounded-md text-black text-xl font-medium">Next </button>

  </div>
  
  <div className="hero-img flex justify-end mr-20 my-8">
    <img src="/hero.png" alt="hero image" className="w-[50%] h-[80%] object-contain"/>
  </div>
</div>
)}

const Page3: React.FC<{ onNextPage: () => void, movie: string, handleMovieChange: any }> = ({ onNextPage, movie, handleMovieChange }) => {return(
<div className="prompt-details flex flex-col w-[50%]">
  <section className="prompt-details-heading">
  <h2 className=" text-5xl my-10">Prompt Details</h2>
  <div className="leading-8 mb-4">
    <p> Tell us about the prompt you want to sell </p>
    <p> These details are not final. Our team will make edits if it goes live </p>
  </div>
  </section>
  
   
  <section className="mb-1">
    <h6 className="font-bold text-[12px] mb-1.5">Prompt type</h6>
    <p className="text-[12px] mb-1 text-pbr-purple text-gray-300"> <i>Select the type of prompt you want to sell</i></p>
    <select name="prompt-type" className="cursor-pointer bg-pbr-purple p-1 font-medium rounded w-[180px] outline-none">
      <option selected disabled>Select Prompt Type </option>
      <option value="GPT / ChatGPT "> GPT / ChatGPT </option>
      <option value="DALL-E">DALL-E</option>
      <option value="Midjourney">Midjourney</option>
      <option value="Stable-diffusion">Stable diffusion</option>
      <option value="PromptBroker">PromptBroker</option>
    </select>
  </section>

  <section className="my-4">
    <h6 className="font-bold text-[12px] mb-1">Name</h6>
    <p className="text-pbr-purple text-[12px] mb-1 text-gray-300"> <i>Suggest a title for this prompt</i></p>
    <form onSubmit={(e)=>e.preventDefault()}>
    <input 
      type="text"
      id="name"
      value={movie}
      onChange={handleMovieChange}
      className="w-full h-[40px] indent-5 rounded-md bg-pbr-purple text-sm focus:outline-none focus:ring focus:ring-sky-900"
      maxLength={40}
      placeholder="Movie to Emoji Generator" 
    />
    </form>
  </section>

  <section className="my-7">
    <h6 className="font-bold text-[12px] mb-2">Description</h6>
    <p className="text-pbr-purple text-[12px] mb-2 text-gray-300"> <i>Describe what your prompt does to a potential buyer. A more detailed description will increase your sales.</i></p>
    <textarea name="prompt-description" className="text-sm w-full h-[80px] bg-pbr-purple rounded-md pt-2 indent-3 focus:outline-none" 
    placeholder="Convert movie titles into emoji">  </textarea>
  </section>

  <section className="mt-3">
    <h6 className="font-bold text-[12px] mb-2">Estimated price</h6>
    <p className="text-pbr-purple text-[12px] mb-1 text-gray-300"> <i>What do you think the price of this prompt should be?</i></p>
    <select name="prompt-price" className="cursor-pointer bg-pbr-purple rounded p-1 w-[80px] mb-7 outline-none">
      <option value="3.99">3.99</option>
      <option value="4.99" selected>4.99</option>
      <option value="5.99">5.99</option>
      <option value="6.99">6.99</option>
    </select>
  </section>
  <button onClick={onNextPage} className="prompt-center bg-white w-[150px] p-2 h-[50px] rounded-md text-black text-xl font-medium">Next </button>
</div>
)}

const Page4: React.FC<{ onNextPage: () => void, selectedOption: any, handleOptionChange: any, CompletionGPT: any, ChatGPT: any }> = ({ onNextPage, handleOptionChange, selectedOption, CompletionGPT, ChatGPT }) => {return(
<div className="completion-gpt flex justify-between items-start w-full">
  <div className="prompt-file flex flex-col w-[50%]">
  <h2 className="prompt-center text-5xl my-9">Prompt File</h2>
  <p className="prompt-center mb-4 text-lg">What type of GPT prompt is this?</p>
  <span className="text-[12px] mb-1 font-bold text-gray-400"> <i>Select what type of GPT prompt this is.</i></span>
  <select name="GPT-type" className="select flex items-start justify-start cursor-pointer text-md bg-pbr-purple p-1 indent-2 rounded w-[220px]"
  value={selectedOption} onChange={handleOptionChange}>
    <option value="selected" selected disabled>Select GPT Type </option>
    <option value="CompletionGPT">Completion (Regular GPT)</option>
    <option value="ChatGPT"> Chat [ChatGPT]</option>
  </select>
  {selectedOption === 'selected' && <p></p>}
  {selectedOption === 'CompletionGPT' && <CompletionGPT />}
  {selectedOption === 'ChatGPT' && <ChatGPT />}
  {selectedOption !== "selected" && <> <div className="flex flex-col">
      <span className="text-[12px] font-medium">*Prompt instructions</span>
      <span className="text-[12px] my-2 font-bold text-gray-400"><i>Any extra tips or examples for the buyer on how to use this prompt.</i></span>
      <textarea placeholder="To use this prompt you need to." className="focus:outline-none pt-2 pl-2 mb-4 text-sm  w-full h-[85px] bg-pbr-purple rounded-md"></textarea>
    </div>
  <button onClick={onNextPage} className="prompt-center bg-white w-[150px] p-2 h-[50px] rounded-md text-black text-xl font-medium">Next </button>
  </>}
  </div> 
  {selectedOption === "CompletionGPT" && <div className="about-prompt-video w-[47%] h-[350px]">
    <iframe src="https://www.youtube.com/embed/QORw7FJ5lho" title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
    web-share" className="w-full h-full mt-10"></iframe></div>}
</div>

  
)}
const Page5: React.FC<{ onNextPage: () => void, getCountries: any, selected: any, handleSelected: any }> = ({ onNextPage, selected, getCountries, handleSelected }) => {return(
<div className="get-paid-full flex flex-col w-[50%]">
  <div className="get-paid">
    <h2 className=" text-5xl my-10">Get paid</h2>
    <p className="text-lg">Connect your Bank account with Stripe to start receiving payments from every sale of your Prompt.</p>
  </div>
  
  <h6 className="font-bold text-[12px] mt-7">Country of residence</h6>
  <p className="text-[12px] mb-1 text-gray-400 font-bold mb-3"> <i>We need to know this for sending payouts. Please read our <a href="/faq" className="underline">FAQ</a> if your country does not appear here.</i></p>
    <select name="select-country" className="outline-none cursor-pointer bg-pbr-purple w-[35%] mb-6 rounded-md p-2" value={selected} onChange={handleSelected}>
      <option selected></option>
      {getCountries.map((country: Country)  => (
        <option value="selected">{country.name}</option>
      ))}
    </select>
  {selected === "selected" && <button type="submit" className="connect-bank-btn w-[200px] rounded-md text-black bg-white text-2xl px-5 font-medium h-[48px] mb-4" onClick={onNextPage}> Connect Bank </button>}

</div>
)}
const Page6: React.FC<{ onNextPage: () => void }> = ({ onNextPage }) => (
<div className="flex flex-col">
  This is the last page
</div>
)

const Sell = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>("selected");
  const [selected, setSelected] = useState<string>("");
  const [isSignIn, setIsSignIn] = useState<any>(true);
  const [isActive, setIsActive] = useState<string>("sign in");
  const [getCountries, setGetCountries] = useState<any>([]);
  const [promptValue, setPromptValue] = useState<any>(false);
  const [movie, setMovie] = useState<any>("");

  const max_progress = 6;
  const max_name_length = 40;
  const progressBar = `${(currentPage / max_progress) * 100}%`;
  const countries_url = "https://restcountries.com/v2/all";

  const handleNextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  }
  
  const handleDelete = () => {
    setCurrentPage(1);
  }

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };
  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
  };
  const handlepromptValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromptValue(true);
  };
  const handleMovieChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    console.log(inputValue)
    setMovie(inputValue);
  };

  const handlePreventDefault = (e: React.FormEvent) => {
    e.preventDefault()
  }
  

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(countries_url)
      const responseData = await response.json();
      setGetCountries(responseData);
    }

    fetchCountries()
  }, []);

  const SignIn = () => {

    return (
        <form onSubmit={handlePreventDefault}>
          <h2 className="sign-center mt-5 ml-5 text-[20px] text-black leading-10 font-semibold">Log in</h2>
          <div className="form m-auto w-[95%] h-[200px] flex justify-evenly flex-col">
          <div className="email w-full mt-[-10px] flex justify-between border-b-2 border-red-500">
            <input 
              type="text"
              placeholder="E-mail*"
              className="text-sm h-[20px] outline-ligbtblue w-[95%] mb-1 text:focus:translate-y-[-10px]"
            />
            <FontAwesomeIcon icon={faEnvelope} className="fill-blue-700" />
          </div>
          <p className="text-[10px] mt-[-10px] text-red-500">E-mail is required</p>
          <div className="password flex justify-between border-b-2 border-red-500">
            <input 
              type="password"
              placeholder="Password *"
              className="text-sm h-[30px] outline-blue w-[95%] mb-1 focus:bg-pbr-purple"
            />
            <FontAwesomeIcon icon={faEyeSlash} className="mr-1"/>
            <FontAwesomeIcon icon={faLock} className="text-xl mb-1 fill-blue-700" />
          </div>
          <p className="text-[10px] mt-[-10px] text-red-500">Password is required</p>
          <div className="login">
          <button type="submit" className="w-full bg-blue-700 rounded-md p-2 text-black font-medium">Log In</button>
          </div>
         <div className="forgot-password">
          <p className="w-full flex justify-center pt-2 font-sm">Forgot Password ?</p>
         </div>
        </div>
        </form>
    );
  };

  const Register = () => {

    return (
      <form onSubmit={handlePreventDefault}>
          <h2 className="sign-center mt-5 ml-5 text-[20px] text-black leading-10 font-semibold">Register</h2>
          <div className="form m-auto w-[95%] h-[200px] flex justify-evenly flex-col">
          <div className="name w-full flex justify-between border-b-2 border-red-500">
            <input 
              type="text"
              placeholder="Name *"
              className="text-sm h-[20px] outline-ligbtblue w-[95%] mb-1 text:focus:translate-y-[-10px]"
            />
            <FontAwesomeIcon icon={faUserAlt} className="fill-blue-700" />
          </div>
          <div className="email w-full flex justify-between border-b-2 border-red-500">
            <input 
              type="text"
              placeholder="E-mail*"
              className="text-sm h-[20px] outline-ligbtblue w-[95%] mb-1 text:focus:translate-y-[-10px]"
            />
            <FontAwesomeIcon icon={faEnvelope} className="fill-blue-700" />
          </div>
          <p className="text-[10px] text-red-500">E-mail is required</p>
          <div className="password flex justify-between border-b-2 border-red-500">
            <input 
              type="password"
              placeholder="Password *"
              className="text-sm h-[30px] outline-blue w-[95%] mb-1 focus:bg-pbr-purple"
            />
            <FontAwesomeIcon icon={faEyeSlash} className="mr-1"/>
            <FontAwesomeIcon icon={faLock} className="text-xl mb-1 fill-blue-700" />
          </div>
          <p className="text-[10px] text-red-500">Password is required</p>
          <div className="login">
          <button type="submit" className="w-full bg-gray-500 rounded-md p-2 text-black font-medium">Register </button>
          </div>
        </div>
        </form>
    );
  };
  
  const FormContainer = () => {
    
    const handleToggleForm = (param: string) => {
      setIsSignIn(param);
      setIsActive(param);
    };
  
    return (
      <div className="form-container w-full h-full text-black flex flex-col justify-between">
        <div className="formpage flex  border-b-[1px] h-[12%] items-center justify-start w-full">
          <div className="sign-in w-[30%] h-full flex justify-start items-center">
            <p onClick={() => handleToggleForm("sign in")} className={`cursor-pointer w-full text-gray-400 flex justify-center items-center mr-5 py-auto font-semibold h-full ${isActive === "sign in" ? "active" : ''}`}> Sign In </p>
          </div>
          <div className="register w-[30%] h-full flex justify-start items-center">
            <p onClick={() => handleToggleForm("register")} className={`cursor-pointer w-full text-gray-400 py-auto flex justify-center items-center font-semibold h-full ${isActive === "register" ? "active" : ''}`}>Register </p>
          </div>
           </div>
           <div className="form w-[85%] m-auto border-2 h-[65%] flex flex-col justfify-center items-start">
             <div className="sub-form w-full">
              {isSignIn === "register" ? <Register /> : <SignIn />}
             </div>
           </div>
           <div className="google w-full flex justify-center items-center border-t-[1px] h-[12%]">
           <span className="flex justify-center items-center"> <FontAwesomeIcon icon={faGoogle} className="text-black-500"/> <span className="ml-1 text-lg font-sm">Google</span></span>
           </div>
      </div>
    );
  };

  const ProgressBar = () => {
    return (
      <>
    <section className="progress w-full flex justify-between items-center mt-10">
      <div onClick={handlePrevPage} className={`flex items-center justify-center mr-[-10px]  hover:transition duration-700 ease-in-out hover:translate-x-[-5px] cursor-pointer ${currentPage === 1 ? "hide" : ""}`}> 
      <span className="text-2xl mr-[3px]"><FontAwesomeIcon icon={faCaretLeft}/> </span>Back</div>
        <div className={`progress-bar h-[5px] bg-pbr-purple  rounded-lg ${currentPage !== 1 ? "w-[76%]" : 'w-[90%]'}`}>
          <div className=" progress-bar-fill h-[5px] bg-white rounded-lg" style={{ width: `${progressBar}`}}></div>
        </div>
        <div className="steps"> Step {currentPage}/{max_progress} </div>
        <span className={`ml-[-10px] cursor-pointer ${currentPage === 1 ? "hide" : ""}`}><FontAwesomeIcon icon={faTrashAlt} onClick={handleDelete}/></span>
      </section>
      </>
    );
  };

  const ChatGPT = () => {

    return(
      <div className="mt-1">
        <p className="chatgpt font-sm my-4"> Copy and paste your prompt below. Ensure any editable parts of your prompt are indicated by <span className="font-bold">[square brackets].</span></p>
        <div className="flex flex-col mb-4">
          <span className="text-[12px] font-medium mb-1">Prompt</span>
          <textarea className="w-full h-[250px] bg-pbr-purple rounded-md" onChange={handlepromptValueChange}></textarea>
          {promptValue && <TestingPrompt />}
        </div>
      </div>
    );
  };

  const TestingPrompt = () => {

    return(
      <>
        <span className="txting-prompt text-[12px] font-semibold mt-5">*Testing Prompts</span>
        <span className="text-[12px] my-2 font-sm text-gray-400"><i>One example of your prompt with all variables filled in, e.g. 
          if your prompt contained a variable like [Tone of voice], this variable should be changed to "happy" or "sad" in your test prompt. 
          Buyers will not see this, it is only for PromptBase's internal testing.</i></span>
          <textarea name="" className="h-[250px] focus:border-green-600 outline-green-700 pl-3 pt-2 rounded-md bg-pbr-purple"></textarea>
          <span className="validate text-green-700 text-[12px] flex justify-around items-center w-[18%] mt-2">< FontAwesomeIcon icon={faCheckCircle} /> Valid Text Prompt</span>
          <span className="text-[12px] font-semibold mt-5">*Engine</span>
          <span className="text-[12px] my-1.5 font-sm text-gray-400"><i>What GPT Engine does this prompt use</i></span>
          <select className="w-fit bg-pbr-purple rounded outline-none h-[30px]">
            <option selected></option>
            <option value="gpt-turbo">gpt-3.5-turbo</option>
            <option value="">gpt-4</option>
            <option value="" disabled>gpt-4 32k (coming soon)</option>
          </select>
          <span className="text-[12px] font-semibold mt-5">*Preview Input</span>
          <span className="text-[12px] my-1.5 font-sm text-gray-400"><i>A preview input to this prompt to show a potential buyer. Don't include your 
            whole prompt here, just the bits that are editable - e.g. [Company]: Microsoft, [Tone of voice]: Happy.</i></span>
          <textarea name="" className="h-[100px] outline-none pl-3 pt-2 rounded-md bg-pbr-purple"></textarea>
          <span className="text-[12px] font-semibold mt-5">*Preview Output</span>
          <span className="text-[12px] my-1.5 font-sm text-gray-400"><i>Any extra tips or examples for the buyer on how to use this prompt.</i></span>
          <textarea name="" className="h-[100px] outline-none pl-3 pt-2 rounded-md bg-pbr-purple"></textarea>
          
      </>
    );
  }

  const CompletionGPT = () => {

    return (
      <div className="flex justify-start items-start mb-4 w-full">
        <div className="flex flex-col w-full mr-1">
          <p className="completion font-sm my-4 text-[17px] text-gray-300">Copy and paste the JSON GPT prompt file from the OpenAI playground. 
            Ensure any editable parts of your prompt are indicated by <span className="font-bold">[square brackets].</span></p>
          <p className="completion font-sm text-[16px] mb-4 text-gray-300">Watch our 19 second guide to the right (below on mobile) if you're stuck.</p>
          <span className="text-[12px] font-medium mb-2">*Prompt File</span>
          <textarea className="w-full h-[300px] rounded-md bg-pbr-purple mb-4 pl-2 resize-none focus:outline-none"></textarea>
        </div>
      </div>
    );
  };

  return(
    <div className="sell mx-[100px]">
      <ProgressBar />
      {currentPage === 1 && <Page1 onNextPage={handleNextPage}/>}
      {currentPage === 2 && <Page2 onNextPage={handleNextPage} FormContainer={FormContainer}/>}
      {currentPage === 3 && <Page3 onNextPage={handleNextPage} movie={movie} handleMovieChange={handleMovieChange} />}
      {currentPage === 4 && <Page4 onNextPage={handleNextPage} selectedOption={selectedOption} handleOptionChange={handleOptionChange} ChatGPT={ChatGPT} CompletionGPT={CompletionGPT}/>}
      {currentPage === 5 && <Page5 onNextPage={handleNextPage} selected={selected} handleSelected={handleSelected} getCountries={getCountries}/>}
      {currentPage === 6 && <Page6 onNextPage={handleNextPage} />}
    </div>

  );
}

export default Sell;