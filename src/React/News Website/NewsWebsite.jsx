import logo from './logo.jfif';
import './NewsWebsite.css';

function NewsWebsite() {
  return (
    <>
      <Post
        author="Jarco Vianen"
        publishedAt="2022-10-12 | 17:02:46"
        title="Apple: The Bear Case Is Most Likely"
        description="Apple has shown great financial performance and its unparalleled ecosystem provides a wide moat. Find out why I'm not buying AAPL stock."
        urlToImage="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1305769484/image_1305769484.jpg?io=getty-c-w750"
      />
      <Post
        author="Ray Massey"
        publishedAt="2022-10-12 | 17:00:49"
        title="Tesla Model Y's new rival: Polestar's £80k 3 SUV unveiled"
        description="Order books open online from today ahead of first deliveries from next year and go into direct competition with Tesla's Model Y. Here's everything you need to know about the new Polestar 3 SUV."
        urlToImage="https://i.dailymail.co.uk/1s/2022/10/12/15/63388077-0-image-a-99_1665586113612.jpg"
      />
      <Post
        author="Stephen Edelstein"
        publishedAt="2022-10-12 | 17:00:01"
        title="Sporty Polestar 3 SUV is an EV guiding star"
        description="The Polestar 3 borrows heavily from Polestar parent Volvo, but with its own unique style and an emphasis on performance."
        urlToImage="https://www.digitaltrends.com/wp-content/uploads/2022/10/Polestar-3-front-three-quarter.jpeg?p=1"
      />
      <Post
        author="Andrew J. Hawkins"
        publishedAt="2022-10-12 | 17:00:00"
        title="The Polestar 3 is an electric SUV that trades fancy distractions for raw technological prowess"
        description="Polestar unveiled its third-ever vehicle, the Polestar 3 electric SUV, with 300 miles of range, a starting price of $83,900, and lot of high-powered tech under the hood."
        urlToImage="https://cdn.vox-cdn.com/thumbor/gdd7Ecw62fQyREE8eepdr1_VENs=/0x0:5000x3750/1200x628/filters:focal(2500x1875:2501x1876)/cdn.vox-cdn.com/uploads/chorus_asset/file/24102693/Polestar_3_B__12__Snow__Performance_Pack.jpg"
      />
    </>
  );
}

const Post = (props) => (
  <div className='post' >
    <div className='head'>
      <div className='logo'><img src={logo} alt="Logo" /></div>
      <div className="authorANDimage">
        <div className="author">{props.author}</div>
        <div className="time">{props.publishedAt}</div>
      </div>
    </div>
    <div className='data'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
    <div className="image"><img src={props.urlToImage} alt="" /></div>
  </div>
)

export default NewsWebsite;
