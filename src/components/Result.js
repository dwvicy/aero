import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Result(props) {
  return (
    <div className="container">
      <div className="result">
        You are <strong>{props.quizResult}</strong>!
      </div>

      <div className="containz buttonbox">
        {(() => {
          switch (props.quizResult) {
            case "Enlightened Novice":
              return (
                <a
                  className="link_button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.myntra.com/clothing?f=Brand%3AAND%2CFOREVER%2021%2CH%26M%2CONLY%2CVero%20Moda%3A%3ABundles%3ASingle%20Styles%3A%3ACategories%3ADresses%2CShorts%2CShrug%2CSkirts%3A%3AColor%3ABlack_36454f%2CCoffee%20Brown_4b302f%2CGrey%20Melange_9fa8ab%2CNavy%20Blue_3c4477%2CPurple_800080%3A%3ACountry%20of%20Origin%3AIndia%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0"
                >
                  You need something fiery and bold, check these picks on Myntra for
                  you!
                </a>
              )
            case "Household (Her)o":
              return (
                <a
                  className="link_button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.myntra.com/women-clothing?f=Brand%3A109F%2CAND%2CAllen%20Solly%20Woman%2CDOROTHY%20PERKINS%2CMANGO%2CONLY%2CVero%20Moda%3A%3ACategories%3ABodysuit%2CDresses%2CJumpsuit%2CShirts%2CTops%3A%3AColor%3ABlack_36454f%2CNavy%20Blue_3c4477%2CWhite_f2f2f2%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0%3A%3APrice%3A299.0_1224.0_299.0%20TO%201224.0"
                >
                  You need something elegant, check these picks on Myntra for you!
                  {">>>"}
                </a>
              )
            case "Climate Champion":
              return (
                <a
                  className="link_button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.myntra.com/women-clothing?f=Brand%3A109F%2CAND%2CAllen%20Solly%20Woman%2CDOROTHY%20PERKINS%2CMANGO%2CONLY%2CVero%20Moda%3A%3ACategories%3ABodysuit%2CDresses%2CJeggings%2CJumpsuit%2CShirts%2CTops%2CTshirts%3A%3AColor%3AGreen_5eb160%2CNavy%20Blue_3c4477%2CPink_f1a9c4%2CRed_d34b56%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0%3A%3APrice%3A299.0_1224.0_299.0%20TO%201224.0"
                >
                  You need something flowy and floral, check these picks on Myntra
                  for you!
                </a>
              )
            case "Exceptional Enviromentalist":
              return (
                <a
                  className="link_button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.myntra.com/women-clothing?f=Brand%3A109F%2CAND%2CAllen%20Solly%20Woman%2CDOROTHY%20PERKINS%2CHRX%20by%20Hrithik%20Roshan%2CMANGO%2CONLY%2CVero%20Moda%3A%3ACategories%3ABodysuit%2CJeggings%2CJumpsuit%2CLeggings%2CSweaters%2CSweatshirts%2CTshirts%3A%3AColor%3ABlack_36454f%2CGreen_5eb160%2CNavy%20Blue_3c4477%2CPink_f1a9c4%2CRed_d34b56%2CWhite_f2f2f2%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0%3A%3APrice%3A299.0_1224.0_299.0%20TO%201224.0"
                >
                  You need something sporty and comfy, check these picks on Myntra
                  for you!
                </a>
              )
            default:
              return (
                <a
                  className="link_button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.myntra.com/women-clothing?f=Brand%3A109F%2CAND%2CAllen%20Solly%20Woman%2CDOROTHY%20PERKINS%2CHRX%20by%20Hrithik%20Roshan%2CMANGO%2CONLY%2CVero%20Moda%3A%3ACategories%3ABodysuit%2CDresses%2CJeggings%2CJumpsuit%2CLeggings%2CShirts%2CSweaters%2CSweatshirts%2CTights%2CTops%2CTrousers%2CTshirts%3A%3AColor%3ABlack_36454f%2CGreen_5eb160%2CNavy%20Blue_3c4477%2CPink_f1a9c4%2CRed_d34b56%2CWhite_f2f2f2%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0%3A%3APrice%3A299.0_1224.0_299.0%20TO%201224.0"
                >
                  Ah it seems you broke us with your complex persona, check these
                  picks on Myntra for you!
                </a>
              )
          }
        })()}
        <br />
        <Link className="link_button" to="/gen">
          <span>Take the quiz again</span>
        </Link>
      </div>
    </div>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
}

export default Result
