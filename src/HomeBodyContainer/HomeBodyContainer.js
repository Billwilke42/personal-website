import React from 'react'
import './HomeBodyContainer.css'
import profilepic from '../assets/profilepic1.JPG'

const HomeBodyContainer = () => {
  return (
    <section className='body'>
    <img src={`${profilepic}`} alt='headshot' className='profile-pic'></img>
    <div className='about-me'>
      <h3>About me:</h3>
      <p>
        Warp jolly boat Jack Ketch gally scallywag Shiver me timbers main sheet capstan skysail ballast. Yellow Jack keelhaul clap of thunder skysail nipperkin driver prow interloper gabion furl. Scuttle yo-ho-ho black spot hang the jib maroon reef sails gangplank clap of thunder hands prow.
        Quarter pink topgallant rope's end snow knave clipper cutlass jack mizzenmast. Nelsons folly killick starboard lugger lookout reef Sail ho topgallant run a rig me. Measured fer yer chains hornswaggle warp pink Yellow Jack Pirate Round yo-ho-ho scallywag stern schooner.
        Landlubber or just lubber grog blossom Pirate Round weigh anchor topmast Admiral of the Black rutters Blimey salmagundi hulk. Mizzenmast topgallant man-of-war Plate Fleet Privateer fore grapple ahoy American Main aft. Landlubber or just lubber cackle fruit maroon heave down galleon aft topsail cable bilge water spirits.
      </p>
    </div>
    </section>
  )
}

export default HomeBodyContainer