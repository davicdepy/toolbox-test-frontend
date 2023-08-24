import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useSelector } from 'react-redux';
import {
    selectCount,
    selectMessage
} from './reduxService';

export function ReduxCounter() {

    const count = useSelector(selectCount);
    const message = useSelector(selectMessage);

    return (
        <>
            <Container className="pb-3 text-center">
                <strong>
                    Total of Rows is: {count}
                </strong>
                {message!== "" && <p className="text-danger">{message}</p>}
            </Container>
        </>
    );
}