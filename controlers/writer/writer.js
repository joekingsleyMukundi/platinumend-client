exports.getDashboard = (req,res,next) => {
    res.render('worker-dashboard',)
}
exports.getInvoices = (req,res,next) => {
    res.render('worker-invoice',)
}
exports.getJobs = (req,res,next) => {
    res.render('worker-jobs',)
}
exports.getWallet = (req,res,next) => {
    res.render('worker-wallet',)
}