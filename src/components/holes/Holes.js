let Holes = localStorage.getItem('holes');
Holes = Holes ? JSON.parse(Holes) : [
  {hole: "01", par: 3, scores: {}},
  {hole: "02", par: 3, scores: {}},
  {hole: "03", par: 4, scores: {}},
  {hole: "04", par: 3, scores: {}},
  {hole: "05", par: 4, scores: {}},
  {hole: "06", par: 5, scores: {}},
  {hole: "07", par: 3, scores: {}},
  {hole: "08", par: 3, scores: {}},
  {hole: "09", par: 3, scores: {}},
  {hole: "10", par: 3, scores: {}},
  {hole: "11", par: 2, scores: {}},
  {hole: "12", par: 3, scores: {}},
  {hole: "13", par: 3, scores: {}}
];

localStorage.setItem('holes', JSON.stringify(Holes));

export default Holes;