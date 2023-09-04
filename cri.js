// {
//         "Below are some criteria and priorities to select names in options;-----------------------------------------------------done"
//         "1. When a person has 0 Friends;"
//         "a.If the number of school / college members or friends are zero.The option boxes will be greyed out and the question and emoji will be hardcoded.Then a   popup message will appear saying “Please invite your friends to start complimenting”;"
//         "b.And there should be a button to invite more members from school / college / contacts.;"     
//         // ;-----------------------------------------------------done"
        
        
        
        
        
//         "2. When a person has less than 4 friends and less that 4 members from their school but greater than 0;"
//         "a.Display the friends that they have added;-----------------------------------------------------done"
//         "b.Display Schoolmates / college mates on app;-----------------------------------------------------done"
//         "c.priority 1 - 6 defined below will remain same;-----------------------------------------------------done"
//         "d.If still, we are not able to find 4 names fill as many names we get and then grey out other options;"


        
//         "3. When a person has more than 4 friends:"
//         "Priority1 – If someone user coins and selected their name to be populated on your poll their name will come first;"
//         "Priority2 - If someone &#39;s name from friends or school is not picked by anyone their name will start populating;-----------------------------------------------------done"
//         "Priority3 – Populate friends they have added.;-----------------------------------------------------done"
//         "Priority4 - Populate names from their contacts who are already on app but their real name from app should be populated.;-----------------------------------------------------done"
//         "Priority 5: Populate school / college members names.-----------------------------------------------------done;
//         "Priority6: If user has invited any friend to populate their name also in options.;
//         "If questions are of flirtatious type, then populate name of Boys if user is girl or vice versa.If question is superlative the option can be mix of both boys and girls..-----------------------------------------------------done;
//         "Priority7: One search box below shuffles and skip after 2nd shuffle. ;
//         "In this place user will search for contact names: If the contact number is in our data base then that person will get message in inbox, if not then a WhatsApp message will go like a below image along with the link to download app also when that user downloads the app this message should appear in their inbox. 
//         "For WhatsApp message – when user selects a name of person not on app.
//         "There will be a pop up saying click tap to continue to invite them to this app. 
//         "This message will be sent through our company business account
//         "After this search bar will disappear and it will show Tap to Continue"
// }


function displayNames(person, pollParticipants) {
    const result = [];
  
    // If the person has less than 4 friends and less than 4 schoolmates, but greater than 0
    if (
      person.friends.length < 4 &&
      person.schoolmates.length < 4 &&
      person.friends.length > 0
    ) {
      // a. Display the friends they have added
      result.push(...person.friends);
  
      // b. Display Schoolmates / college mates on app
      result.push(...person.schoolmates);
  
      // c. Priority 1 - 6 will remain the same, but you can customize the order if needed
  
      // d. If we are not able to find 4 names, fill as many names as we get and grey out other options
      const remainingSlots = 4 - result.length;
      if (remainingSlots > 0) {
        // Priority 1: User coins and selected names
        // Implement your logic to add Priority 1 names here
  
        // Priority 2: Names not picked by anyone from friends or schoolmates
        person.friends.forEach((friend) => {
          if (!pollParticipants.includes(friend) && result.length < 4) {
            result.push(friend);
          }
        });
        person.schoolmates.forEach((schoolmate) => {
          if (!pollParticipants.includes(schoolmate) && result.length < 4) {
            result.push(schoolmate);
          }
        });
  
        // Priority 3: Populate friends they have added
        // This is already added above.
  
        // Priority 4: Populate names from contacts who are already on the app
        // Implement your logic to add Priority 4 names here
  
        // Priority 5: Populate school / college members' names
        // Implement your logic to add Priority 5 names here
  
        // Priority 6: If the user has invited any friend, populate their names
        // Implement your logic to add Priority 6 names here
      }
    } else {
      // Handle other cases or conditions here if needed
    }
  
    // Return the result with a maximum of 4 names
    return result.slice(0, 4);
  }
  
  // Example usage:
  const person = {
    friends: ["Friend1", "Friend2", "Friend3"],
    schoolmates: ["Schoolmate1", "Schoolmate2"],
  };
  
  const pollParticipants = ["User", "Friend1"];
  
  const displayedNames = displayNames(person, pollParticipants);
  
  console.log(displayedNames);
  
