import React from 'react';
export default function Home() {
  return (
    <div className="body-container">

      {/* Hero begins */}
    <div className="hero-container">
      <div className="hero-left">
          <h2>
            DALL.E, GPT, Midjourney,</h2> 
            <h2>Stable Diffusion,
            ChatGPT
          </h2>
          <h3>
            Prompt Marketplace
          </h3>
          <h1>
            Find top prompts, produce better results, save on API costs
            sell your own prompts.
          </h1>

          <span>
            <a href="" className='findPrompt'>Find a prompt</a>
            <a href="" className='sellPrompt'>Sell a Prompt</a>
          </span>
      </div>
      
      <div className="hero-right">
        <div className="hero-promptcontainer">
          <div className="hero-prompt">
              <img src="" alt="" />
          </div>
          <div className="hero-prompt">
              <img src="" alt="" />
          </div>
          <div className="hero-prompt">
              <img src="" alt="" />
          </div>
          <div className="hero-prompt">
              <img src="" alt="" />
          </div>
        </div>
      <h1>
        Featured in
      </h1>
      <div className="featured-logo">
          <img src="" alt="logo" />
          <img src="" alt="logo" />
          <img src="" alt="logo" />
          <img src="" alt="logo" />
          <img src="" alt="logo" />
          <img src="" alt="logo" />
      </div>
      </div>
    </div>

      {/* Featured begins */}
    <div className="featured">

      <div className="featured-prompt">
        <div className="featuredprompt-text">
        <h1>Featured Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <div className="featuredprompt-text">
        <h1>Hottest Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <div className="featuredprompt-text">
        <h1>Newest Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <a href="" className='market browse-market' >Browse Marketplace</a>
      </div>

      {/* About begins */}
      <div className="about">
        <span>
          <h3>What is </h3>
          <h2>PromptBase?</h2>
        </span>
        <p>
          Prompts are becoming a powerful new way of programming AI models 
          like DALL.E, Midjourney & GPT.
        </p>
        <p>
          However, it's hard to find good quality prompts online.
        </p>
        <p>
          If you're good at prompt engineering, there's also no clear way to make 
          a living from your skills.
        </p>
        <p>
          PromptBase is a marketplace for buying and selling quality 
          prompts that produce the best results, and save you money on API costs.
        </p>
      </div>

      {/* prompt marketplace  */}
      <div className="featured-prompt prompt-market">
        <div className="featuredprompt-text promptmarket-text">
          <h1>Most Popular Prompts This week</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <div className="featuredprompt-text promptmarket-text">
        <h1>Most Popular prompts This Month</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <a href="" className='market browse-market' >Browse Marketplace</a>
      </div>

      {/* Sell Prompt */}
      <div className="sell-prompt">
        <h3>
          Earn from your Prompt Engineering Skills
        </h3>
        <p>
          PromptBase is an early marketplace for DALL.E, Midjourney, Stable Diffusion
          & GPT prompts.
        </p>
        <p>
          Sell your prompts on PromptBase and earn from your prompt crafting skills.
        </p>
        <p>
          Upload your prompt, connect with stripe, and become a seller in just 2 minutes.
        </p>
        <a href="" className='market' >Sell a Prompt</a>
      </div>

      {/* sample chat prompts */}
      <div className="featured-prompt prompt-market">
        <div className="featuredprompt-text promptmarket-text">
          <h1>Newest Midjourney Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <div className="featuredprompt-text promptmarket-text">
        <h1>Newest GPT Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <a href="" className='market browse-market' >Browse Marketplace</a>
      </div>

      {/* Generate images  */}
      <div className="sell-prompt image-prompt">
      <span>
          <h2>Generate images </h2>
          <h3>directly in PromptBase</h3>
        </span>
        <p>
          Start prompt engineering instantly within promptBase using Stable Diffusion.
        </p>
        <p>
          Craft prompts and sell them on the marketplace.
        </p>
        <p>
          Get 5 free generation credits every day.
        </p>
        <a href="" className='market' >Generate images</a>
      </div>

      {/* sample image prompts */}
      <div className="featured-prompt prompt-market">
      <div className="featuredprompt-text promptmarket-text">
        <h1>Newest DALL.E Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <div className="featuredprompt-text promptmarket-text">
        <h1>Newest Stable Diffusion Prompts</h1>
        </div>
        <div className="prompts-container">
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>
          <div className="prompt">
            <img src="" alt="prompt" />
          </div>         
        </div>

        <a href="" className='market browse-market' >Browse Marketplace</a>
      </div>
    </div>
    </div>
  )
}
