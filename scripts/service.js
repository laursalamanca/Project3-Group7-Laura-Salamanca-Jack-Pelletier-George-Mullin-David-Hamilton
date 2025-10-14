function picker(){
    const drop = document.getElementById("Dropdown");
    const value = drop.value;
    const textarea = document.getElementById("serviceD");
    const addional = document.getElementById("add");
    const head = document.getElementById("header");
    if(value === "collison"){
        head.innerHTML = "Collision Repair";
        textarea.innerHTML = "Here’s a legal refresher when it comes to your rights as a customer working with an insurance company:<br><br>"
        + "<b>No staff or independent, appraiser, insurer, representative of insurer, or employer of an independent appraiser shall refer the claimant to or away from any  specific repair shop or require that repairs be made by a specific repair shop or individual.” – Commonwealth of MA Regulation 212 2.0.4<br><br></b>"
        +" Simply put, the choice is entirely yours. And even more importantly, the insurance company has no legal right to insist that you should go to one body shop over another. It is against MA regulations for anyone representing an insurance company to steer you to one of their insurance shops or away from the shop of your choice.<br><br>"+
        "They also cannot tell you that they won’t pay for the repairs completed in a licensed shop of your choosing, or that the repair costs will be higher. Some of the things you’ll hear from insurance representatives will be intentionally misleading. Their motivation for doing this is to increase their profit margins, often at the expense of the quality and safety of your repair.<br><br>"+
        " even though these actions are illegal, we see it all the time. However, as a collision repair shop with a reputation to uphold, we will never cut corners to complete the repair for you.We’re dedicated to educating our customers about their rights. We’ve been in the accident repair business for more than 25 years, so we have the experience that consumers need to help navigate them through conflicting and confusing  information provided by insurers. We work for you, not your insurance company. And above all, we are here to be your advocate for a safe, worry-free repair and a hassle-free claim process.<br><br> "+
        "We care about you, our customers, and your safety. We’ve developed long-standing,  repeat relationships with the people in our community over the last three decades. We want to help you get the information you need to protect yourself from unsafe, low quality repairs. One of the ways we do this is by providing you with these consumer resources so that you’ll understand your rights and avoid the steering that’s all too common in the industry today."+
        " <br><br> We take the hassle out of dealing with insurance claims by working directly with your insurance company. ";
        addional.innerHTML = ("<h1><b>Remember: Your Car, Your Choice.</b></h1>"+"Here’s a brief summary of your rights when you’re in search for the right shop for you, and when dealing with your insurers:"+
            "<ul>"+
"<li>    You have the right to have your vehicle towed to any location that you choose.</li>"+
"<li>    You do not have to go to a drive-in claims center. Your insurer must inspect the vehicle at any location you choose.</li>"+
"<li>    You do not have to get multiple appraisals.</li>"+
"<li>    Your insurance company is responsible for payment to restore your vehicle to preaccident condition.</li>"+
"<li>    Your insurer must negotiate in good faith with the shop of your choice.</li>"+
"<li>    However, you must notify your insurance company before repairs begin.</li>"+
"<li>    <b>You have the right to choose AV Repair! AV Repair is a Massachusetts licensed and bonded repairs! </b></li>"+
"</ul>");
    }
    if(value === "appraisal"){
        head.innerHTML = "Appraisal";
        textarea.innerHTML = "An appraisal will help you determine your car’s value, something you may  not be able to accomplish personally. Getting your car appraised is not difficult, but obtaining an accurate appraisal may be a challenge, Especially if your car is rare. Finding a qualified appraiser may be a challenge. We are a licensed appraiser. We follow the Uniform Standards of Professional Appraisal Practice (USPAP) as authorized by Congress. We will  provide you with a written report that supplies a detailed description of the vehicle as well as the procedure used to determine our opinion of your car’s value. That value will be based on what the car could sell for at retail today. ";
        addional.innerHTML = " ";
    }
        if(value === "free"){
        head.innerHTML = "Free Written Repair Estimates";
        textarea.innerHTML ="You should be sure to always insist on getting a free written repair estimate whenever you have your car serviced. A written auto repair estimate is a contract between you and  the repair shop that describes what will be done and how much it will cost. Getting this information in writing can help prevent problems down the road. Read the estimate carefully, and ask for an explanation of anything you don’t understand. The best repair estimate is one that details the labor and parts costs, and has clear instructions such as, “Check for a hesitation when the gas pedal is pressed.”  "
        +"<br><br> AV Repair will always give you a written estimate before asking you to approve moving forward with any maintenance or repairs.";
        addional.innerHTML = " ";
    }
       if(value === "computerized"){
        head.innerHTML = "Computerized Maintenance Records";
        textarea.innerHTML = ("What about the receipts for all the maintenance and repair you’ve had done to your car?  Are they squished in your glove compartment? Do you lovingly smooth out the wrinkles and file them away in the household section of the family file folder? " + 
        "<br><br> AV Repair meticulously maintains computer records for all services performed on your car. If you sell your car privately, prospective owners may be more inclined to purchase a car with a carefully maintained service history. ");
        addional.innerHTML - " ";
    }
     if(value === "restoration"){
        head.innerHTML = "Restoration";
        textarea.innerHTML =( "Restoring a car to period-correct condition presents unique challenges. Whether you’re restoring a classic Cadillac, Lincoln, Buick, VW, Mercedes, or Rolls Royce, projects often require reversing several decades worth of subpar repairs. Likewise, with vintage cars, parts can be difficult to find or are no longer available. Fortunately, AV Repair has the experience and resources to restore your classic back to driver or Concours quality condition."+
        "<br><br> In order to uncover all potential problem areas, we start with a  complete disassembly of the vehicle during the frame-off restoration  process when necessary. Through our extensive network of suppliers, AV Repair can track down hard-to-find parts like emblems,  hood ornaments, and trim pieces. In the event that these items can’t be found, we have the resources and fabrication ability to restore rare original parts. From chrome plating bumpers to repairing the wheels spokes on a Model T,  we have the talent and experience to get the job done."+
        "<br><br>While we specialize in complete restorations, we also offer a variety of stand-alone services for your project. Whether your car is in need of metal work, a custom paint job, suspension repair, an engine rebuild, or electrical help, AV Repair can help you get your classic back on the road."
        );
        addional.innerHTML - " ";
    }
    if(value === "ATMS"){
        head.innerHTML = "Automotive Technical & Mechanical Services";
        textarea.innerHTML = "Our staff consists of trained technicians and mechanics who are committed to providing you with the best automotive service. Our technicians are trained to work with the computers and the compatible equipment to discover the problems in your car. "+
        "<br><br>Our team works on traditional mechanical components, such as engines, transmissions, and drive belts. However, they are also familiar with a growing number of electronic systems. Braking, transmission, and steering systems, for example, are controlled  primarily by computers and electronic components."+
        "<br><br>Other systems, such as accident-avoidance sensors, are becoming common as well. In addition, a growing number of technicians are required to work on vehicles that run on alternative fuels, such as ethanol and electricity.";
        addional.innerHTML = ("<h3><b>Our technicians preform:</b></h3>" + 
            "<ul>"+
            "<li><h4><b>Scheduled Factory Maintenance</b></h4></li>"+
            "<ul>Every vehicle manufacturer recommends periodically servicing your vehicle for good reason. Proper vehicle maintenance will increase the longevity of your vehicle and avoid costly and potentially dangerous breakdowns.   </ul>"+
            "<ul><br>At AV Repair, we have invested in the people, training, and equipment to fix just about any vehicle on the road today. There is no need to go back to the car dealer for these routine services. We can perform the exact same services for less money and in less time. You DO NOT have to go back to the car dealer for service to maintain the vehicle warranty. It is your vehicle, and you have the right to repair it wherever you like. </ul>"+
            "<li><h4><b>Automotive air-conditioning service</b></h4></li>"+
            "<ul>Install and repair air conditioners and parts, such as compressors, condensers, and controls. Our technicians are trained in government regulations related to their work.</ul>"+
            "<li><h4><b>Brake repairs</b></h4></li>"+
            "<ul>Adjust brakes, replace brake rotors and pads, and make other repairs on brake systems.</ul>"+
            "<li><h4><b>Front-end service </b></h4></li>"+
            "<ul>Align and balance wheels and repair steering mechanisms and suspension systems. </ul>"+
            "<li><h4><b>Driveability</b></h4></li>"+
            "<ul>Our technicians use their extensive knowledge of engine management, emission, fuel, electrical, and  ignition systems to diagnose issues that prevent engines from performing efficiently.</ul>"
        );
    }
    if(value === "autobody"){
        head.innerHTML = "Auto Body Repair";
        textarea.innerHTML = ("Choosing a trained and licensed collision repair facility assures you that the repair shop is adhering to the strict standards set in place by each manufacturer, and that they will perform safe, complete and quality repairs. AV Repair’s professionals have the knowledge and understanding to effectively communicate and work with one another when repairing your vehicle. They know when parts can be repaired, or when they need to be replaced. This helps to eliminate surprises when the repair bill comes, and it leads to less hassle for you. AV Repair is dedicated to training their employees on the latest collision repair technology to help achieve a safe and complete repair.     "+
        "<br><br>AV Repair’s professionals have received the highest level of collision repair training. Our technicians are very experienced with repairing all makes and models. They have access to manufacturer specific information for your vehicle, as well as material specific training with products your vehicle is constructed with.");
        addional.innerHTML = " ";
    }
    if(value === "paint"){
        head.innerHTML = "Paint Services";
        textarea.innerHTML = ("AV Repair has a wide variety of painting capabilities from small scratch repair to entire vehicle refinishing. Our specially trained  technicians use our in-house paint mixing system to apply coatings to your vehicle after the metal finishing and body work are completed. AV Repair’s goal is to make your car look like the day it rolled off the production line. To accomplish this we start with the end result in mind."+
            "<br><br>AV Repair uses an online paint code retrieval system to locate the correct paint formula for your vehicle and then mix your vehicles color in its shop. We are able to mix a very accurate amount of paint down to a fraction of an ounce. This process ensures you are not paying for unused paint and the environment will suffer less due to waste."+
            "<br><br>In order to achieve the correct color, texture and gloss of the last top coat, AV Repair starts with the proper primers. Primers will be applied to bare metal surfaces. The primer is hand sanded and visually inspected for the smallest of imperfections. This detailed and time consuming process ensures the proper substrate finish and will allow for the sealer, color, and clear coatings to be applied to achieve the same or better appearance than the factory finish."
        );
        addional.innerHTML = " ";
    }
    if(value === "frame"){
        head.innerHTML = "Frame and Suspension Repair";
        textarea.innerHTML = "Structural repairs are often the most precise and technical type of  repairs performed. This is because the structural part of the car is its  foundation. The vehicle’s manufacturer designed it to meet safety, durability, performance, and impact standards based on its structural foundation. In a collision structure can be damaged. Having access to  your vehicle’s specific build information allows AV Repair to make the  correct repair decisions per the manufacturer’s specifications. AV Repair has the equipment to diagnose and repair structural collision damage."
        addional.innerHTML = " ";
    }
    if(value == "rust"){
        head.innerHTML = "Rust Repair";
        textarea.innerHTML = ("Over the last 30 years AV Repair has repaired almost every type of popular car and truck, and has engineered repair techniques that allow us to restore these vehicles to roadworthy condition at a budget-friendly price. Our unique service has helped thousands of customers get years of additional use from vehicles that looked ready for the junk yard."+
            "<br><br>AV Repair knows that the rust encountered on daily drivers can be blamed partly on the salty New England environment, from the ocean spray to the winter road salt. An ounce of prevention is worth a pound of cure. "+
            "<br><br>Even your most dependable car can get a bit rusty. After years of use and driving, the scratches and dings start to build up which can lead to rust. Worried about rust spots? They’re obviously eyesores, but rust on a vehicle can also cause significant damage to your car’s chassis, body panels, frame, and sheet metal. So, having some trepidation about that unsightly car rust is appropriate. The longer you wait to get it fixed, the further the rust will extend, and the bigger the spot grows, the more likely you are to face long-term effects like body and paint damage."+
            "<br><br>Don’t let a rust spot grow out of control. At AV Repair, our professionals are experienced in removing rust build-up. We ensure that your vehicle will be looking its best when leaving our shop. "+
            "<br><br>Repairing rust damage on a car is no simple task. That’s why it’s important to bring your vehicle to a shop that’s expert in rust repair, like AV Repair. "
        );
        addional.innerHTML = " ";
    }
    if(value === "tuning"){
        head.innerHTML = "Engine Tuning and Performance";
        textarea.innerHTML = ("For the peak performance of your vehicle, your engine must be healthy. AV Repair’s tuning services can help keep your engine healthy and operating at peak performance."+ 
    "<br><br>At AV Repair we frequently meet vehicle owners who have questions. What is an engine tune-up? How  often should my car get one?"
        );

        addional.innerHTML = ("<p><br><br> To perform a basic engine tune-up procedure, AV Repair goes through a series of inspections:</p>"+"<ol>" + 
        "<li>Visually inspect the engine’s fuel-system components looking to make sure the fuel filter is clean and clog-free, that a clogged filter hasn’t caused any damage to the fuel pump, and that the fuel injectors are free of deposits and other grime.</li>"+
        "<li>Visually inspect the spark plugs to gauge their age and wear.</li>"+
        "<li>Check spark plug for wear and re-gap as necessary.</li>" +
        "<li>As needed, replace your vehicle’s points and condenser, if applicable.</li>"+
        "<li>Check and adjust the ignition timing, timing belts and idle if needed.</li>"+
        "<li>Check the engine’s PCV valve.</li>"+
        "<li>Check the vehicle’s engine air filter and cabin air filter.</li>"+
        "<li>Check oil and coolant levels.</li>"+
        "<li>Assess and address cause of “Check Engine” indicator.</li>"+
        "<li>Check and adjust tire inflation.</li>"+ 
        "</ol>"+
        "<p>Engine tuning is the adjustment or modification of the engine or ECU (engine control unit) to yield optimal performance and increase the engine's power output, economy, or durability. These goals may be mutually exclusive; an engine may be de-tuned with respect to output power in exchange for better economy or longer engine life due to lessened stress on engine components."+
        "<br><br> Tuning can include a wide variety of adjustments and modifications, such as the routine adjustment of the carburetor and ignition system to significant engine overhauls. Performance tuning of an engine can involve revising some of the design decisions taken during the development of the engine."+
        "<br><br>Setting the idle speed, air-fuel-ratio, carburetor balance, spark plug and distributor point gaps, and ignition  timing are regular maintenance tasks for older engines. On modern engines equipped with electronic ignition and fuel injection, some or all of these tasks are automated but they still require periodic calibration. "+
        "How often is an engine tune-up  needed? Requirements vary from vehicle to vehicle, and can also vary based on vehicle mileage and age. "+
        "</p>"
    );
    }
    if(value === "exaust"){
        head.innerHTML = "Exhaust Systems";
        textarea.innerHTML = "When people think of a car’s exhaust system, they usually think of the muffler. But there are other components to the exhaust system, and over the years, automakers have developed more and more sophisticated ways to increase efficiency, reduce noise, and limit emissions. Your exhaust system includes your muffler, piping, and a catalytic converter, which reduces pollution. Generally speaking, exhaust systems are resilient, and problems that arise with them are often a sign that something else in the vehicle isn’t working properly. Still, it’s important to be vigilant about possible exhaust problems."
        addional.innerHTML = ("<p>Signs of an exhaust system, catalytic converter or muffler problem include:</p>"+
            "<ul>"+
            "<li>Rattling or loud noise when depressing the accelerator </li>"+
            "<li>Excessive loud noises while driving</li>"+
            "<li>Gasoline or sulfur odors</li>"+
            "<li>Decrease in acceleration or power</li>"+
            "<li>Decrease in fuel efficiency</li>"+
            "</ul>"+
            "<p><br><br> At AV Repair, our technicians are well versed in exhaust and muffler problems and the latest methods of remedying them. We work with both sound-absorbing and baffled chambered mufflers, and we can handle the exhaust problems that are common among all major makes and models. We can also diagnose engine skipping and other troubles that could lead to a costly replacement of your catalytic converter. No matter what exhaust problem you’re facing, our AV Repair team is ready to help get your vehicle back into tip-top shape."
        );
    }
    if(value === "oil"){
        head.innerHTML = "Oil and Fluid Maintenance";
        textarea.innerHTML = ("Today's cars are the best they've ever been, but they're still not maintenance-free wonder machines. Cars also need frequent TLC, and its an auto's six different fluids that need the most attention. "+
            "<br><br>Fluids play a huge role in almost every facet of your car, including fuel economy and longevity. Keeping them at the proper level will help your car last longer and drive better, something we can all get behind. "+
            "<br><br>Oil is your car's most important fluid. Engines components spin thousands of times a minute, and it's oil that keeps everything moving smoothly. Oil level is one thing, but its condition is equally important. Oil level and quality should be checked regularly and changed as and when needed."+
            "<br><br>With all the combustion and friction that happens in an engine, it produces a lot of heat. Coolant works to keep everything  cool, by absorbing engine heat and dissipating it through the radiator. Maintaining the correct coolant level prevents overheating. Coolant levels need be checked less frequently than oil but at least every 50,000 miles."+
            "<br><br>Power steering systems are hydraulic, using pressurized fluid to make turning the wheel effortless (though some newer models now rely on electric steering). There's no set time-frame on when power steering fluid needs to be replaced, but you should have it checked regularly."+
            "<br><br>Over time brake fluid can become contaminated by water, which can make brake lines rust. Leaks can also form, leading to a spongy pedal feel or irregular brake performance. Brake fluid level and quality should be regularly checked and flushed. "+
            "<br><br>Transmission fluid serves a similar purpose as oil in the engine: it lubricates and cools the components inside your transmission. Transmissions contain gears,  clutches (even in automatics), and valves which must move smoothly to  provide seamless shifts. While some transmissions come with ''lifetime'' fluid that should never need replacement, bad transmission fluid can cause rough shifting, strange noises and uncontrolled surging that make driving difficult. If you experience any transmission issues, have a professional mechanic inspect the fluid condition. "+
            "<br><br>Windshield washer fluid doesn't have any effect on your car's performance, but it's still vital to safe driving. After all, if you can't see where you're going, you  won't get very far. Have it checked whenever your car is in for service of any kind."
        );
        addional.innerHTML = " ";
    }
    if(value === "rotate"){
        head.innerHTML = "Tire Rotation and Balancing";
        textarea.innerHTML = ("Rotating and balancing your tires is the most efficient method of increasing the life of your tires. Just like shoes, tires become worn in certain areas because they experience friction. A set of tires is one of the most expensive things to replace on your vehicle. "+
            "<br><br>Rotate and balance is a phrase that describes two specific procedures that increase the safety and efficiency of your tires. Tires are rotated according to manufacturers specifications. When they are balanced, the technician uses a special machine to check to see if the weight of the tire and wheel is balanced. If it is not, the technician will attach small lead weights to the rim of the wheel to ensure that they are balanced. "+ 
            "<br><br>Most manufacturers recommend that all four tires should be rotated and balanced at least every seven thousand miles. A great way to keep up with this recommendation is to have your tires rotated and balanced about every time you have your oil changed. "+
            "<br><br>One of the most important reasons to rotate your tires is safety. Typically, tread wears away quicker on the front tires than on the back. The less tread you have on the front tires, the easier it is to loose control of your vehicle. Rotating the tires according to manufacturers specifications keeps more tread on the tires for a longer period of time."+
            "<br><br>The second reason this maintenance practice is so important is that it is efficient. If you do not rotate and balance your tires, you will have to replace your front tires much more often than your rear tires. Regularly rotating them allows all four tires to become worn at the same rate. This allows you to purchase a complete set of four tires instead of two pairs at separate times"+
            "<br><br>Rotating and balancing your tires is a great way to ensure that your car won’t slip or skid because of worn treads. It is also an excellent way to increase the time until you have to purchase a new set."
        );
        addional.innerHTML = " ";
    }
    if(value === "brake"){
        head.innerHTML = ("Brake Repair <br>"+"<h3>Average Price: Sedan $250 to $350 per axle, SUV $350 to $450 per axle</h3>");
        textarea.innerHTML = "We want our customers to feel comfortable in their vehicle. Here are some brake issues and corrective services provided by AV Repair.";
        addional.innerHTML =( "<ul>" +
            "<li><h4><b>Anti-Lock Brake System</b></h4></li>"+
            "<ul>If your ABS light  comes on, visit AV Repair will be happy to diagnose and fix the problem.</ul>"+
             "<li><h4><b>Brake Fluid Flushes</b></h4></li>"+
             "<ul>Brake fluid absorbs water from the air over time, causing the brake system to become less effective and the fluid to become corrosive, possibly damaging the system. It is important to perform a brake fluid flush periodically. </ul>"+
             "<li><h4><b>Brake Hoses</b></h4></li>"+
             "<ul>A crushed hose can cause lagging or slow brake, and a leak in the hose can cause the brake, or the entire brake system, to fail.  These should be replaced at the first sign of cracking or wear.</ul>"+
             "<li><h4><b>Brake Pad & Shoe Replacement</b></h4></li>"+
             "<ul>Brake pad problems can be identified by squealing brakes. If brake pads deteriorate completely, you'll hear a grinding metal-on-metal sound when braking, meaning that it's too late and you're ruining your rotors or drums. Bring your car to AV Repair immediately if you have brake problem symptoms.</ul>"+
             "<li><h4><b>Caliper Replacement</b></h4></li>"+
             "<ul>The  brake caliper houses the brake pads and fits around the rotor like a clamp, pressing the pads against the rotor when you brake.  A brake caliper problem could cause uneven braking, making your car slide forward when you brake. Uneven braking can also cause your vehicle to  slide out of control in bad weather conditions.</ul>"
        );
    }
    if(value === "tires"){
        head.innerHTML = "Tires";
        textarea.innerHTML = ("<br><br>As a tire wears, its ability to perform is reduced.  Especially on wet, snowy or icy roads. How can you tell if you need new tires? AV Repair will measure your tires tread depth to see if they’re ready for the roads or replacement."+
        "<br><br>The stopping distances from 70 mph for a car with about 2/32'', the legal minimum tread depth, versus a set of tires with 4/32” tread depth, is about 100 feet more.. And the car with 2/3'' tread depth tires will still be traveling at about 45 mph when the the vehicle equipped with the 4/3''deep tires has come to a complete stop!"+
        "<br><br>While replacing your tires before they are legally worn out may not appear the most economical practice, it is far less expensive than  repairing your car if it can't stop in an emergency situation in less distance than the vehicle ahead of you!"
        );
        addional.innerHTML  =" ";
    }

}