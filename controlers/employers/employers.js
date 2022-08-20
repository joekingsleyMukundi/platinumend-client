exports.getDashboard = (req,res,next) => {
    res.render('employer-dashboard',)
}
exports.getInvoices = (req,res,next) => {
    res.render('invoices',)
}
exports.getInvoice = (req,res,next) => {
    res.render('invoice',)
}
exports.getWorkers = (req,res,next) => {
    res.render('workers',)
}
exports.getJobs = (req,res,next) => {
    res.render('jobs',)
}
exports.getProfile = (req,res,next) => {
    res.render('profile')
}
