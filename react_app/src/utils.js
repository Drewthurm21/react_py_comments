const classNamesArr = [
  'Adam Bazzi',
  'Aileen Kim',
  'Anton Do',
  'Brennan Cota',
  'Brian Khoo',
  'Clarence Ma',
  'Eli Foster',
  'Eunice Park',
  'Gal Atias',
  'Grace Cizma',
  'Hamilton Truong',
  'Jamal Sheriff',
  'James (xinbo) (James) Zhou',
  'Jason Greenberg',
  'John Cruz',
  'Jordan Blancaflor',
  'Kenny (Ken) Leong',
  'Kian Seyedjafari',
  'Kyle Parkin',
  'Leandro Figueiredo',
  'Marcus Kim',
  'Nathan Heinz',
  'Nicholas (Nick) Arakaki',
  'Nicholas (Nick) Murphy',
  'Nygil Nettles',
  'Patrick Mckinney',
  'Pete Franco',
  'Philip Lee',
  'Ruidan (Meredith) Zhang',
  'Ryan Goggin',
  'Sameh Fazli',
  'Sarah Nodwell',
  'Sean Baeyens',
  'Tony Vongvone',
  'Troy Lee',
  'Tuan Tran',
  'Vian Khachatourian',
  'Vusal Layijov',
  'Ye Lwin (Will) Htay',
  'Yue Hao',
  'Zaineb Marediya',
  'Zakariya (Zak) Beg'
]

export const pickRandomHelper = () => window.alert(classNamesArr[Math.floor(Math.random() * classNamesArr.length)])

export const createCommentCard = (comment, clickCb) => (
  <div key={comment.id} className='single-comment'>
    <div>{comment.user_name}</div>
    <div>{comment.id}</div>
    <button className='delete-Button'
      onClick={() => clickCb(comment.id)}>Delete Me</button>
    <div>{comment.body}</div>
  </div>
)