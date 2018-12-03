import React from 'react';
import { shallow, configure, ShallowWrapper } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { TestComponent } from '../src/components';

configure({adapter: new Adapter()});

let testComponent: ShallowWrapper<undefined, undefined>;
beforeEach(() => testComponent=shallow(<TestComponent message="testing"/>));

// checking that all is fine and component has been rendered
it("should render without error", () => expect(testComponent.length).toBe(1));
