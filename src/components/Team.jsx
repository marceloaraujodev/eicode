import Button from '../ui/button';
import './Team.css';

export default function Team() {
  return (
    <>
      <div className="devsContainer" id='Programadores'>
        <div className="p-5 text-center bgDevs test">
          <div className="container py-5 test">
            <h1 className=" mb-5 nossoTimeTitle">Nosso Time</h1>
            <div className="col-lg-12 mx-auto lead">
              <div className="container marketing">
                <div className="row">
                  <div className="col-lg-4 teamPhotos">
                    <img
                      src="https://img.freepik.com/premium-photo/take-my-advice-meet-often-cropped-portrait-mature-businessman-sitting-boardroom-duri_590464-2908.jpg"
                      alt="Team Member"
                    />
                    <h2 className="fw-normal  mt-3">Joe Smith</h2>
                    <p>
                      Some representative placeholder content for the three
                      columns of text below the carousel. This is the first
                      column.
                    </p>
                    <Button className="btnTeam" btnTitle={'View Details »'} />
                  </div>
                  <div className="col-lg-4 teamPhotos">
                    <img
                      src="https://img.freepik.com/premium-photo/take-my-advice-meet-often-cropped-portrait-mature-businessman-sitting-boardroom-duri_590464-2908.jpg"
                      alt="Team Member"
                    />
                    <h2 className="fw-normal  mt-3">Joe Smith</h2>
                    <p>
                      Some representative placeholder content for the three
                      columns of text below the carousel. This is the first
                      column.
                    </p>
                    <Button className="btnTeam" btnTitle={'View Details »'} />
                  </div>
                  <div className="col-lg-4 teamPhotos">
                    <img
                      src="https://img.freepik.com/premium-photo/take-my-advice-meet-often-cropped-portrait-mature-businessman-sitting-boardroom-duri_590464-2908.jpg"
                      alt="Team Member"
                    />
                    <h2 className="fw-normal  mt-3">Joe Smith</h2>
                    <p>
                      Some representative placeholder content for the three
                      columns of text below the carousel. This is the first
                      column.
                    </p>
                    <Button className="btnTeam" btnTitle={'View Details »'} />
                  </div>
                  <div className="shape2"></div>
                </div>
                {/* <hr className="featurette-divider mt-5" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
