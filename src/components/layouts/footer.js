import { Container, Row } from 'react-bootstrap';

import '../../App.css';

export const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Row className='w-100 pb-2 mx-0'>
        <p>
          Email: info@greentime.com |
          Phone: 011-4565-120 |
          Address: Damascus/Baghdad.st/ The White Tower
        </p>
      </Row>
    </Container>
  )
}
