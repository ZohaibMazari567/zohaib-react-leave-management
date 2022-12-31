const Next7DaysLeaves = [
    {
      id: 1,
      Username: "Momcilo Milijasevic",
      DateTo: 1672617600000,
      DateFrom: 23,
      LeaveType: "paid sick",
      Profile: "images/testimonial1.jpeg",
    },
    {
      id: 2,
      Username: "Somebody Else",
      DateTo: 1672617600000,
      DateFrom: 3,
      LeaveType: "paid Casual",
      Profile: "images/testimonial2.jpeg",
    },
    {
      id: 3,
      Username: "Anybody Acually",
      DateTo: 1674617600000,
      DateFrom: 4,
      LeaveType: "paid sick",
      Profile: "images/testimonial1.jpeg",
    },
    {
      id: 4,
      Username: "Someone Here",
      DateTo:  1674617600000,
      DateFrom: 31,
      LeaveType: "paid Casual",
      Profile: "images/dummy_profile.jpeg",
    },
    {
      id: 5,
      Username: "fesal",
      DateTo: 1672364404000,
      DateFrom: 23,
      LeaveType: "paid sick",
      Profile: "images/testimonial4.jpeg",
    },
  
    {
      id: 5,
      Username: "ali",
      DateTo: 1672191604000,
      DateFrom: 5,
      LeaveType: "paid sick",
      Profile: "images/testimonial4.jpeg",
    },
  ];
  
  
  Next7DaysLeaves.sort((a,b)=>a.DateTo-b.DateTo);
  
  export default Next7DaysLeaves;