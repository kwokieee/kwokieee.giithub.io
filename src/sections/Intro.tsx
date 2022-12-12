function Intro() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-10">
        <img src="/images/profile-pic.jpg" className="h-64 w-64 rounded-full" />
      </div>
      <h1 className="pt-5">Hi, I'm Bryan!</h1>
      <p className="text-3xl pt-5">I’m a full stack engineer that loves trying new things!</p>
      <p className="pt-5">
        I’m currently a penultimate year computer science undergraduate from the National University of Singapore.
      </p>
      <p className="pt-2 max-w-4xl">
        I believe that experience is the best teacher, and throughout my university life, I have been diving into anything and everything to discover what I love and dislike, as well as what I’m good and bad at, to help me grow as a person.
      </p>
    </div>
  )
}

export default Intro