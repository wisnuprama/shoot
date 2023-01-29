import { css } from "@emotion/react";
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
    <footer css={css`
      padding-top: 24px;
      padding-left: 12px;
      padding-right: 12px;
      background: #1A1C20;
      color: #F7F7F7;
    `}>
      <div>
        <div>
          <div>
            <div>
              <div>
                {siteTitle} • {authorName}.
              </div>
              <div>
                Except where otherwise stated, the content on this site is
                licensed under a{" "}
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
                >
                  Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
                  International License
                </a>
                .
              </div>
            </div>

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
