import { useState } from "react";

type SocialLink = {
  href: string;
  name: string;
  icon: string;
};

type FooterProps = {
  siteTitle: string;
  authorName: string;
  socialLinks?: SocialLink[];
};

export function HiddenSection() {
  return (
    <div className="col-md-5">
      <h5 className="text-md-right">Contact Me</h5>
      <hr />
      <form>
        <fieldset className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control"
            id="exampleMessage"
            placeholder="Message"
          ></textarea>
        </fieldset>
        <fieldset className="form-group text-xs-right">
          <button type="button" className="btn btn-secondary-outline btn-lg">
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export function Footer({ siteTitle, authorName, socialLinks }: FooterProps) {
  const [showHiddenSection, _] = useState(false);
  return (
    <footer className="footer">
      <div>
        <div>
          <div>
            <h5>{siteTitle} • © Copyright 2023 {authorName}. All rights reserved.</h5>
            {Array.isArray(socialLinks) && (
              <span className="nav">
                {socialLinks.map((s) => (
                  <div className="nav-item">
                    <a href={s.href} className="nav-link pl-0">
                      {s.name}
                    </a>
                  </div>
                ))}
              </span>
            )}
            <br />
          </div>
          {showHiddenSection && <HiddenSection />}
        </div>
      </div>
    </footer>
  );
}
