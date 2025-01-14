{% renderOverview %}

  Cards are flexible surfaces used to group information in a small layout. They give small previews of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.

  <pf-card>
    <h3 slot="header">Header</h3>
    <p>This is the default card</p>
    <a slot="footer" href="#">Link in the footer</a>
  </pf-card>
{% endrenderOverview %}

{% band header="Usage" %}

  ### Compact card
  {% htmlexample %}
  <pf-card size="compact">
    <h3 slot="header">Header</h3>
    <p>This is the compact card</p>
    <a slot="footer" href="#">Link in the footer</a>
  </pf-card>
  {% endhtmlexample %}

  ### Rounded card
  {% htmlexample %}
  <pf-card rounded>
    <h3 slot="header">Header</h3>
    <p>This is the rounded card</p>
    <a slot="footer" href="#">Link in the footer</a>
  </pf-card>
  {% endhtmlexample %}

  ### Large card
  {% htmlexample %}
  <pf-card size="large">
    <h3 slot="header">Large card</h3>
    <p>This is the large card</p>
    <a slot="footer" href="#">Link in the footer</a>
  </pf-card>
  {% endhtmlexample %}

  ### Full Height card
  {% htmlexample %}
  <pf-card fullHeight>
    <h3 slot="header">Header</h3>
    <p>This is the full height card</p>
    <a slot="footer" href="#">Link in the footer</a>
  </pf-card>
  {% endhtmlexample %}

  ### Plain card
  {% htmlexample %}
  <pf-card plain>
    <h3 slot="header">Header</h3>
    <p>This is the plain card</p>
    <a slot="footer" href="#">Link in the footer</a>
  </pf-card>
  {% endhtmlexample %}
{% endband %}

{% renderSlots %}
  All slots are optional. If the slot is not defined, the content will be added to the `body` region of the card.
{% endrenderSlots %}

{% renderAttributes %}

  #### `overflow` (child element attribute)
  Optionally allows an image or element to overflow the padding on the container. This property should be added to the direct child of the slot such as on an image tag; should be added to the element that you want to overflow the container. Accepts: `top`, `right`, `bottom`, `left`.

{% endrenderAttributes %}

{% renderProperties %}{% endrenderProperties %}

{% renderMethods %}{% endrenderMethods %}

{% renderEvents %}{% endrenderEvents %}

{% renderCssCustomProperties %}{% endrenderCssCustomProperties %}

{% renderCssParts %}{% endrenderCssParts %}
