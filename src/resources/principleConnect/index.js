import React from "react";

import Hero from "../../components/hero";
import Sheet from "../../components/sheet";
import StickyHeader from "../../components/stickyHeader";

import principleConnectCoverSrc from "../../assets/principleConnect/dashboard.jpg";
import colorPaletteSrc from "../../assets/principleConnect/palette.jpg";
import buttonHierarchySrc from "../../assets/principleConnect/buttonHierarchy.jpg";
import buttonStatesSrc from "../../assets/principleConnect/buttonStates.jpg";
import cardsSrc from "../../assets/principleConnect/cards.jpg";
import siteEditSrc from "../../assets/principleConnect/siteEdit.jpg";
import dashboardSrc from "../../assets/principleConnect/dashboard.jpg";

const PrincipleConnnect = () => {
  return (
    <section className="resource">
      <Hero background="">
        <h1>Principle Connect</h1>
        <h2>User Experience</h2>
      </Hero>

      <Sheet>
        <section>
          <StickyHeader>
            <h2>Overview</h2>
          </StickyHeader>
          <p>
            During my time working at Principle Global one of my jobs outside of
            Frontend Engineer was to consolidate the user experience for our
            suite of products. The project started as a mixture of designs that
            had been applied over the years to many different clients across our
            products. During this redesign, I had to come up with a design
            language that took all of these different environments into account
            while also offering branding options for our different clients. This
            allowed our users to feel comfortable in whichever product they were
            using without having to relearn the interface.
          </p>
        </section>

        <section>
          <StickyHeader>
            <h2>Color Palette</h2>
          </StickyHeader>
          <p>
            Colors play a crucial role in creating a consistent user experience.
            A simple and consistent color palette throughout your application
            creates an atmosphere your users will become familiar with. Your
            color palette shouldn’t be jarring but rather a subtle mixture of
            colors that create a relaxing tone.
          </p>
          <img src={colorPaletteSrc} alt="Color Palette" />
        </section>

        <section>
          <StickyHeader>
            <h2>Visual Hierarchy</h2>
          </StickyHeader>
          <p>
            Visual hierarchy refers to how items interact with each other on the
            z-axis. The amount of z layers visible on screen should always be
            kept at a minimum (ex: modals shouldn’t overlay modals).
          </p>
          <img src={cardsSrc} alt="Visual Hierarchy" />
        </section>

        <section>
          <StickyHeader>
            <h2>Shadows</h2>
          </StickyHeader>
          <p>
            Shadows help relay a component’s z height in relationship to other
            components on the page. The use of shadows not only creates a
            stronger sense of where content is divided but also helps to
            indicate a stronger sense of hierarchy among the items on the page.
          </p>
        </section>

        <section>
          <StickyHeader>
            <h2>Opacity</h2>
          </StickyHeader>
          <p>
            The use of opacity can help draw the user’s eye away from content
            that they might not need to see at that exact moment. Opacity can be
            utilized to indicate when an element is inactive or to create
            hierarchy among smaller sub headings of text that isn’t as important
            as the main heading.
          </p>
        </section>

        <section>
          <StickyHeader>
            <h2>Layers</h2>
          </StickyHeader>
          <p>
            Layers can be used to dictate higher priority but should never
            overcrowd the application. Layers play hand in hand with shadows to
            help create diversity among the content of a page. Layers can be on
            the same plain of view as each other or can completely overlap other
            content in the instance of a modal or tooltip.
          </p>
        </section>

        <section>
          <StickyHeader>
            <h2>Buttons</h2>
          </StickyHeader>
          <p>
            Buttons are one of the most critical components to an application.
            Almost everything in your app from navigation to interaction is
            accomplished via some kind of button. In order to create a
            consistent user experience, you’ll want all of these actions to look
            familiar to your users. Not every button needs to look identical
            because this would be confusing for your user to identify priority
            among your actions, but all buttons should follow a consistent
            pattern.
          </p>
        </section>

        <section>
          <StickyHeader>
            <h2>Button States</h2>
          </StickyHeader>
          <p>
            There are 3 different button states that each play a different role.
            From left to right, there are resting, active, and disabled. Each of
            these states play a critical role in explaining the button’s action
            to the user. A resting state indicates a button that can be clicked
            but isn’t actively in focus by the user. An active button indicates
            which button is currently focused by the user either by hovering or
            when the user tabs to the button. A disabled state indicates that
            the button exists but isn’t currently able to be used because of an
            unmet prerequisite.
          </p>

          <img src={buttonStatesSrc} alt="Button States" />
        </section>

        <section>
          <StickyHeader>
            <h2>Button Hierarchy</h2>
          </StickyHeader>
          <p>
            Button hierarchy plays an important role in defining the importance
            of the action the button represents. In the following image, there
            are 4 different button styles: Primary, Secondary, Tertiary, and
            Flat. The first 3 options have similar styles with only color
            differences while the fourth button is completely flat with no
            background until hovered. A primary button should represent a high
            priority action that should draw a user’s attention immediately such
            as a call to action to register for your product. A secondary button
            still has a high priority but shouldn’t draw more attention than the
            primary button. An example of a secondary button would be a call to
            action to sign in to a profile. A tertiary button follows along the
            example of the primary and secondary button, it’s an action with
            medium priority that shouldn’t visibly overpower the primary and
            secondary call to actions. A flat button should be of lowest
            hierarchical priority, such as a button to cancel out of a form or
            to delete a profile. This isn’t an action you want a user to do, but
            something they should have the ability to if needed.
          </p>
          <img src={buttonHierarchySrc} alt="Button Hierarchy" />
        </section>

        <section>
          <StickyHeader>
            <h2>Putting It All Together</h2>
          </StickyHeader>
          <p>
            Now that we’ve visited the different principles of creating a
            cohesive user experience, it’s time to put it all together. In the
            following example, you can see the visual hierarchy of a modal
            overlapping background content. Inside this modal is content that
            has been given a shadow to raise it off the base z index of the
            modal to add a level of importance. At the bottom of the modal, a
            set of three buttons that follow the button hierarchy outline the
            actions the user can perform on this set of content that has been
            opened in the new modal.
          </p>
          <img src={siteEditSrc} alt="Button Hierarchy" />
          <p>
            Another great example is the dashboard a user lands on whenever they
            first log into the app. Notice the different levels of hierarchy
            between the sections. The charts at the top are overlaid with
            buttons, one with a lower opacity showing no other options to the
            left and one enabled showing the ability to scroll right. In the
            table below the charts, notice the subtle use of shadows to
            differentiate the upload dropzone from the table heading and
            subsequently the table rows below. This allows the user to work
            their way down the visual hierarchy of the page while keeping track
            of where they are and what actions can be performed in each section.
          </p>
          <img src={dashboardSrc} alt="Dashboard" />
        </section>
      </Sheet>
    </section>
  );
};

export default PrincipleConnnect;
