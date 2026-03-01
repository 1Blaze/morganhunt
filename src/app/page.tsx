import './styles.scss';

export default function Home() {
  return (
    <div className='container'>
      <main className=''>
        <div>
          <h1>Morgan Hunt</h1>
          <h2>Properties</h2>
        </div>
        <div className='divider'></div>

        <div className='websiteSoon'>Website Coming Soon</div>

        <div className='contactSection'>
          <p className='contactIntro'>For any enquiries, give us a call</p>
          <a className='phoneNumber' href='tel:01782307075'>
            01782 30 70 75
          </a>
          <p className='website-url'>
            www.<strong>morganhuntproperties</strong>.co.uk
          </p>
        </div>
      </main>
      <footer>
        &copy; 2026 Morgan Hunt Properties &nbsp;·&nbsp; All Rights Reserved
      </footer>
    </div>
  );
}
