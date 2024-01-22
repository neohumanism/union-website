import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import styled from '@emotion/styled';

const Ent = styled(Typography)({
    padding: "2px",
});
const St = styled(Typography)({
  padding: "2px",
  paddingTop: "16px",
  fontSize: "1.5rem",
});
//I copy pasted this from an earlier project, which is why the formatting is fked up and etc.

const Tos = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" style={{color:"white"}}gutterBottom>Terms of Service & Privacy Policy</Typography>

      <div>
      <St>Terms of Service (ToS)</St>
      <Ent><strong>1. Acceptance of Terms</strong></Ent>
      <Ent>By accessing or otherwise using this website, you agree to have understood, abide by, and forever be bound by these Terms of Service. If you do not agree with these terms, you must refrain from using this website.</Ent>

      <Ent><strong>2. Use of the Website</strong></Ent>
      <Ent>2.1: Users must be at least 18 years old and of mental competence to use this website. If a user is under 18 or not of mental competence, the user is expected to be under the supervision of a parent or legal guardian.</Ent>
      <Ent>2.2: Users who are sensitive to disturbing content must leave this website. By using the website, the user assents to possessing a high tolerance for disturbing content.</Ent>
      <Ent>2.3: Users are expected to engage respectfully and lawfully on this website. Any abusive, illegal, or disruptive behavior may result in termination of access.</Ent>
      <Ent>2.4: The operators of the website reserve the right to suspend access to any user without prior disclosure and for any reason.</Ent>

      <Ent><strong>3. Intellectual Property</strong></Ent>
      <Ent>3.1 Copyright Law: Some content on this website, including but not limited to text, images, graphics, and logos, may be protected by intellectual property laws and belongs to their respective owners. By reproducing or otherwise using any content from this website, you agree to have reviewed in prior the relevant legal frameworks surrounding each specific piece of media to ensure compliance with the relevant laws.</Ent>

      <Ent><strong>4. Disclaimer</strong></Ent>
      <Ent>4.1: This website provides information for general use only. We do not guarantee the accuracy, completeness, or reliability of the content. Usage of its information is at one's own risk.</Ent>
      <Ent>4.2: All information provided on this website is purely hypothetical, satirical, fake, and gay. Furthermore, solely concerning a live-action roleplaying virtual world in the videogame "Minecraft". All resemblance to real contexts is purely coincidental.</Ent>

      <Ent><strong>5. Limitation of Liability</strong></Ent>
      <Ent>5.1: The website owner is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use this website.</Ent>
      <Ent>5.2: Inaccurate information stipulated in these Terms of Service may not be held against the website owner.</Ent>

      <Ent><strong>6. Third-Party Links and Services</strong></Ent>
      <Ent>7.1 External References: The website may contain references or links to third-party websites or services. These links are provided for convenience, and the website owner does not endorse or control third-party content.</Ent>
 
      <Ent><strong>7. Compliance with Host</strong></Ent>
      <Ent>8.1: Users are expected to follow all terms stipulated by this website's host and other relevant providers.</Ent>

      <Ent><strong>8. Modifications and Updates</strong></Ent>
      <Ent>9.1. Changes to Terms: The website owner reserves the right to modify these Terms of Service and the at any time. Users will not be notified of changes, and continued use of the website implies acceptance of the revised terms.</Ent>

    </div>

    <div id="privacy">
      <St>Privacy Policy (PP)</St>
      <Ent><strong>1. Information Collection</strong></Ent>
      <Ent>1.1: Activity on this website is not registered by the website, except that which the host enforces.</Ent>

      <Ent><strong>2. Use of Information</strong></Ent>
      <Ent>2.1: The website and its affiliates reserves the right to use any collected information in accordance with the relevant stipulations.</Ent>

      <Ent><strong>3. Cookies and Tracking</strong></Ent>
      <Ent>3.1: Cookies and similar technologies to collect information do not exist on this website yet.</Ent>

      <Ent><strong>4. Security</strong></Ent>
      <Ent>4.1: There are no additional security measures on this website to protect user information. Users are expected to behave in accordance with this risk.</Ent>

      <Ent><strong>5. Changes to Privacy Policy</strong></Ent>
      <Ent>5.1: The website owner reserves the right to modify this Privacy Policy. Users will not be notified of any changes, and continued use of the website after such changes constitutes acceptance of the revised policy.</Ent>
    </div>
    </Container>
  );
};

export default Tos;
