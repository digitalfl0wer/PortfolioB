
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#F5EBDD] font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#F5EBDD]  sm:items-start">
       
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#722F37]">
            Brie: She Builds Whats Next
            
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Software, AI, and the stories behind what I build.
          </p>
        </div>
        
      </main>
    </div>
  );
}
