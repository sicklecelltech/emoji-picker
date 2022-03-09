import Places from "./Places";

function MainContent(): JSX.Element {
  return (
    <>
      <Places
        image={"./Inverness_Castle_Scotland.jpg"}
        title={"Weekend with the Grandparents"}
        location={"Inverness, St.Ann, Jamaica"}
        description={
          "Chilly weekends on the hilltops in St.Ann, Magnificent views with all the space to explore. Christmas with the grandparents in this remote area of Jamaica."
        }
      />
      <Places
        image={
          "https://en.wikipedia.org/wiki/Inverness_Castle#/media/File:Inverness_Castle,_Scotland_-_Diliff.jpg"
        }
        title={"Going to the closet beach"}
        location={"Fort Clarence, St.Catherine, Jamaica"}
        description={
          "Heading to the local beach 15 minutes away in the hotest part of the jamaican day is a special kind of feeling."
        }
      />
      <Places
        image={
          "https://en.wikipedia.org/wiki/Inverness_Castle#/media/File:Inverness_Castle,_Scotland_-_Diliff.jpg"
        }
        title={"Scotland Roadtrip Pt 1"}
        location={"Inverness, Scotland, United Kingdom"}
        description={
          "Go to see one of the most beautiful old bookshops and easily spent the morning and afternoon browsing and reading old book. Was very hard not to drop a few $$$"
        }
      />
      <Places
        image={
          "https://en.wikipedia.org/wiki/Inverness_Castle#/media/File:Inverness_Castle,_Scotland_-_Diliff.jpg"
        }
        title={"Scotland Roadtrip Pt 2"}
        location={"Dundee, Scotland, Untited Kingdom"}
        description={
          "A day in Dundee was great with seeing local sights and the coast. The trainride in you see the iconic view found in the Harry Potter movies"
        }
      />
      <Places
        image={
          "https://en.wikipedia.org/wiki/Inverness_Castle#/media/File:Inverness_Castle,_Scotland_-_Diliff.jpg"
        }
        title={"Random Road Trip"}
        location={"Portsmouth, England, United Kingdom"}
        description={
          "A beutiful city i once visted mid week. Without the rush of people andchildren it was a lovely day of sightseeing and local food with a breathtaking view despite how flat it all is."
        }
      />
    </>
  );
}

export default MainContent;
