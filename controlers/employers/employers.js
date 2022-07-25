exports.getDashboard = (req,res,next) => {
    res.render('employer-dashboard',)
}
exports.getInvoices = (req,res,next) => {
    res.render('employer-invoices',)
}
exports.getInvoice = (req,res,next) => {
    res.render('employer-invoice',)
}
exports.getWorkers = (req,res,next) => {
    res.render('employer-workers',)
}
exports.getJobs = (req,res,next) => {
    res.render('employer-jobs',)
}
exports.getWallet = (req,res,next) => {
    res.render('employer-wallet',)
}
