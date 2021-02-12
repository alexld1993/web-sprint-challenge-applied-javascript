// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
import "regenerator-runtime";
import { worker } from "./mocks/browser";

import { cardAppender } from "./components/card";
import { Tabs } from "./components/tabs";
import { headerAppender } from "./components/header";

worker.start();

headerAppender(".header-container");
Tabs(".tabs-container");
cardAppender(".cards-container");
