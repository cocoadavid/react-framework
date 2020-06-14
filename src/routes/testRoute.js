import RouteModel from "../models/RouteModel";
import TestPage from "../components/testPage/TestPage";

const testRoute = new RouteModel();
testRoute.path = "/test";
testRoute.component = TestPage;

export default testRoute;
