import React from "react";
import { useEffect } from "react";

function Peta({ setColor }) {
  useEffect(() => {
    setColor("partners");
  });

  return (
    <div className="peta-div">
      <h2>Our issues with PETA</h2>
      <p>
        While we generally agree with the top level belief of PETA, which is the
        ethical treatment of animals, we do not agree with many of their inner
        beliefs. An example of such is, "There is no human supremacy". We beg
        your pardon but what? Some of the animals under our care are there for
        the simple fact that they messed around with humans and found out.
        Humans have proven time and again that they will make extinct any animal
        that rises against them. PETA can support animals all they want but
        saying that humans are not superior is just wrong on so many levels and
        we do not support that.
      </p>
      <br />
      <p>
        Another issue we have with PETA is their insistence with saying that it
        is wrong to perform lab experiments on animals but then providing no
        alternative. How are we supposed to test the effectiveness of drugs if
        not on lab animals? PETA staff will willingly accept medication from
        their doctors when they are sick but then criticise those same doctors
        when they get better. If PETA wants to be taken seriously, they should
        totally stop using medication that went through lab testing. That will
        show their solidarity with their cause. But of course they won't do
        that. They will continue to use medication that has been tested and then
        when they recover, they will go on to criticize those that restored
        their health. We do not support such hypocrisy.
      </p>
      <br />
      <p>
        Last but not the least, PETA is known to kill a lot of animals. This is
        way worse as it is the utmost betrayal. Those who swore to protect are
        those leading a destructive charge. PETA always talk about animals
        having feelings when they are killed for culinary purposes or used as
        "lab rats". But this is quite unfair. At the very least, the animals
        knew they were doomed from the start. But in PETA's case, the animals
        opened their hearts and trusted them for a safe haven, only for PETA to
        cruely betray their trust and take their lives. We do not support such.
      </p>
    </div>
  );
}

export default Peta;
