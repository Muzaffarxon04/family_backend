const pg = require("../../utils/pg/pg");
const {
  allBenefits,
  deleteBenefits,
  newBenefits,
  oneBenefit,
  updateBenefits,
} = require("./model");

class Benefits {
  async allBenefits(req, res) {
    try {
      const { rows } = await pg(allBenefits);

      res.status(200).json({
        message: "ok",
        data: rows,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async oneBenefit(req, res) {
    try {
      const { benefitid } = req.params;
      const { rows } = await pg(oneBenefit, benefitid);

      res.status(200).json({
        message: "ok",
        data: rows,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async newBenefit(req, res) {
    try {
      const { title, course } = req.body;
      const { rows } = await pg(newBenefits, title, course);

      if (rows) {
        res.status(200).json({
          message: "ok",
          data: rows,
        });
      }
      res.status(400).json({
        message: `bad request`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async deleteBenefit(req, res) {
    try {
      const { benefitid } = req.params;
      const rows = await pg(deleteBenefits, benefitid);

      res.status(200).json({
        message: `benefit ${benefitid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }

  async updateBenefits(req, res) {
    try {
      const { title } = req.body;
      const { benefitid } = req.params;
      const rows = await pg(updateBenefits, title, benefitid);

      res.status(200).json({
        message: `benefit ${benefitid} successfully deleted`,
      });
    } catch (error) {
      res.status(400).json({
        message: `errored ${error.message}`,
      });
    }
  }
}

module.exports = new Benefits();
