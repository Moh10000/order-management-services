import OrderService from '../services/OrderService';
import Util from '../utils/Utils';

const util = new Util();

class OrderController {

  static async addOrder(req, res) {
    if (!req.body.customerId || !req.body.itemId) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const { randomInt } = require('crypto');
    const n = randomInt(10000000, 99999999);
    req.body.orderId = n;
    const newOrder = req.body;
    try {
      const createdOrder = await OrderService.addOrder(newOrder);
      util.setSuccess(201, 'Order Added!', createdOrder);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedOrder(req, res) {
    const alteredOrder = req.body;
    if (!Number(alteredOrder.orderId)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateOrder = await OrderService.updateOrder(alteredOrder.orderId, alteredOrder);
      if (!updateOrder) {
        util.setError(404, `Cannot find order with the id: ${alteredOrder.orderId}`);
      } else {
        util.setSuccess(200, 'Order updated', updateOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


  static async deleteOrder(req, res) {
    const alteredOrder = req.body;
    if (!Number(alteredOrder.orderId)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const orderToDelete = await OrderService.deleteOrder(alteredOrder.orderId);

      if (orderToDelete) {
        util.setSuccess(200, 'Order deleted');
      } else {
        util.setError(404, `Order with the id ${alteredOrder.orderId} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default OrderController;
