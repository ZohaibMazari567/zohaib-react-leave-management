const Next7DaysLeaves = [
    {
      id: 1,
      Username: "asim",
      DateTo: 1672617600000,
      DateFrom: 23,
      LeaveType: "paid sick",
      Profile: "images/testimonial1.jpeg",
    },
    {
      id: 2,
      Username: "zohaib",
      DateTo: 1672617600000,
      DateFrom: 22,
      LeaveType: "paid Casual",
      Profile: "images/testimonial2.jpeg",
    },
    {
      id: 3,
      Username: "umer",
      DateTo: 1672105204000,
      DateFrom: 27,
      LeaveType: "paid sick",
      Profile: "images/testimonial1.jpeg",
    },
    {
      id: 4,
      Username: "kamran",
      DateTo: 1672191604000,
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