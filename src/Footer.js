import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
function Footer() {
	return (
		<MDBFooter className=" font-small pt-4 mt-4 footer">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol>
						<p style={{ maxWidth: 800, margin: "auto" }}>
							<i>
								"Movies have the magical power of suspending our real-life
								problems for at least the duration of the film. Not only that,
								but movies can also take us to distant worlds, full of fantastic
								characters and scenarios. So much so that sometimes you might
								forget that those characters are actually just people, and the
								distant world is a film set. The creation of a movie is a real
								and full-time job for the cast and crew, and same as with our
								lives and jobs, not only ordinary but also curious things do
								happen."
							</i>{" "}
							- Giedrė Vaičiulaitytė
						</p>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
}

export default Footer;
